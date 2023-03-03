import { Component } from "react";
import { BiSearch } from 'react-icons/bi';
import css from './Searchbar.module.css'

export class Searchbar extends Component {
  state = {
    search: '',
  };

  // <BiSearch/> or >> 🔍

    onChangeInput = (evt) => {
        const { name, value } = evt.currentTarget;
        this.setState({ [name]: value });
  }

    resetForm = () => {
     this.setState({ search: '' });
    }
  render() {
    return (
      <header className={css.searchbar}>
            <form onSubmit={(evt) => {
                evt.preventDefault();
                this.props.handleSubmit(this.state.search);
                 this.resetForm();
            }
                
            } className={css.form}>
                <button type="submit"
                    className={css.button}>
            <span className={css.buttonLabel}>
              <BiSearch size="20" />
            </span>
          </button>

          <input
            value={this.state.search}
            onChange={this.onChangeInput}
            className={css.input}
            name="search"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}