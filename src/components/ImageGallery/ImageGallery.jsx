import { Component } from 'react';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { getSearch } from 'api/getSearch';
import css from './ImageGallery.module.css';
import { Button } from 'components/Button/Button';
import { Loader } from 'components/Loader/Loader';

export class ImageGallery extends Component {
  state = {
    images: [],
    page: 1,
    total: 1,
    loading: false,
    error: '',
  };

  clickLoad = () => {
    getSearch(this.props.search, this.state.page + 1)
      .then(resp => resp.json())
      .then(data => {
        //   if (data.status !== "ok") {
        //     return Promise.reject(data)
        // }
        //   console.log('response:>>', data);
        // this.setState({
        //   images: data.hits,
        //   total: data.total,
        this.setState(prevSt => {
          return {
            page: prevSt.page + 1,
            images: [...prevSt.images, ...data.hits],
          };
        });
        // });
      });
  };

  componentDidUpdate(prevProps, PrevState) {
    if (prevProps.search !== this.props.search) {
      this.setState({ loading: true });
      getSearch(this.props.search, 1)
        .then(resp => resp.json())
        .then(data => {
          //   if (data.status !== "ok") {
          //     return Promise.reject(data)
          // }
          //   console.log('response:>>', data);
          this.setState({
            images: data.hits,
            total: data.total,
            page: 1,
          });
        })
        .catch(error => {
          //   console.dir(error);
          this.setState({ error: error.message });
        })
        .finally(() => {
          this.setState({ loading: false });
        });
    }
  }

  render() {
      const { error, loading, images, total, page } = this.state;
      console.log("total pages:>>", total/12, "current:", page );
    return (
      <>
        {error && <h2>{error}</h2>}
        {loading && <Loader />}
        <ul className={css.gallery}>
          {images.map(item => (
            <li key={item.id} className={css.galleryItem}>
              <ImageGalleryItem webUrl={item.webformatURL} alt={item.tags} />
            </li>
          ))}
        </ul>
        {total / 12 > page && <Button clickLoad={this.clickLoad} />}
      </>
    );
  }
}
