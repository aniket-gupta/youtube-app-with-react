import React, {Component} from 'react';

export default class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            term: ''
        };
    }
    render() {
        return (
            <div className="col-sm-10 col-sm-offset-1 text-center">
                <div className="col-sm-12 form-group">
                    <form className="input-group">
                        <input className="form-control" placeholder="Search"/>
                        <span className="input-group-btn">
                            <button type="submit" className="btn btn-secondary">
                                <i className="icon-search"></i>
                            </button>

                        </span>
                    </form>
                </div>
            </div>

        );
    }
}
