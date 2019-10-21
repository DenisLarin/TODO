import React, {Component} from 'react';
import Card from "../../components/card/Card";
import InputField from "../../components/inputField/InputField";
import Button from "../../components/button/Button";
import './header.css'

interface IState {
    inputFieldValue: string
}

class Header extends Component<{}, IState> {
    state = {
        inputFieldValue: ""
    };
    onHangeInputFieldHandler = (event: any) => {
        this.setState({
            inputFieldValue: event.target.value
        });
    };

    render() {
        return (
            <Card>
                <p>Добавьте Ваши дела</p>
                <div className="control">
                    <InputField onChange={(event) => this.onHangeInputFieldHandler(event)}
                                value={this.state.inputFieldValue}/>
                    <Button type="add" onClick={() => console.log(12)}/>
                </div>
            </Card>
        );
    }
}

export default Header;