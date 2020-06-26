import React, { Component } from "react";
import Table from "./Table";
import "../style/main.css";
import API from "../api/Api"

class Main extends Component {
    state = {
        result: {},
        search: ""
    };

    componentDidMount() {
        this.search("Employee Directory");
    }
    searchMovies = query => {
        API.search(query)
            .then(res => this.setState({ result: res.data }))
            .catch(err => console.log(err));
    };

    handleFormSubmit = event => {
        event.preventDefault();
        this.search(this.state.search);
    };

    handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        });
    };

    render() {
        return (
            <div>
                <card
                    heading={this.state.result.Name || "Search"}
                >
                    {this.state.result.Name ? (
                        <Table
                            name={this.state.result.Name}
                            phone={this.state.result.Phone}
                            email={this.state.result.Email}
                            DOB={this.state.result.DOB}
                        />
                    )};
                </card>
                <Card heading="Search">
                    <SearchForm
                        value={this.state.search}
                        handleInputChange={this.handleInputChange}
                        handleFormSubmit={this.handleFormSubmit}
                    />
                </Card>
            </div>

        )
    }
}
export default Main;
