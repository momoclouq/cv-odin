import React from "react";

const showMenu = (props) => {
    return(
        <div className="generalInfoShow">
            <div className="GISitemInner">Name: {props.name}</div>
            <div className="GISitemInner">Email: {props.email}</div>
            <div className="GISitemInner">Phone: {props.phone}</div>

            <div className="line"></div>

            <button onClick={props.changeEditState}>Edit</button>
        </div>
    );
};

const editMenu = (props) => {
    return(
        <div className="generalInfoEdit">
            <div className="GIEitem">
                <label htmlFor="name">
                    Name 
                    <input id="name" name="name" type="text" onChange={props.changeValue} value={props.name}/>
                </label>
            </div>
            <div>
                <label htmlFor="email">Email </label>
                <input id="email" name="email" type="text" onChange={props.changeValue} value={props.email}/>
            </div>
            <div className="GIEitem">
                <label htmlFor="phone">Phone </label>
                <input id="phone" name="phone" type="text" onChange={props.changeValue} value={props.phone}/>
            </div>

            <div className="line"></div>

            <button onClick={props.changeEditState}>Done</button>
        </div>
    );
};

class GeneralInfo extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            edit: false,
            name: "",
            email: "",
            phone: "",
        }

        this.changeEditState = this.changeEditState.bind(this);
        this.changeValue = this.changeValue.bind(this);
    }

    changeEditState(){
        this.setState((prevState) => {
            console.log(prevState.edit);
            return {
                edit: !prevState.edit
            };
        });
    }

    changeValue(event){
        switch(event.target.id){
            case "name":
                this.setState({
                    name: event.target.value
                });
                break;
            case "email":
                this.setState({
                    email: event.target.value
                });
                break;
            case "phone":
                this.setState({
                    phone: event.target.value
                });
                break;
            default: break;
        }
    }

    render(){
        const propsEditMenu = {
            ...this.state,
            changeValue: this.changeValue,
            changeEditState: this.changeEditState,
        }

        const propsShowMenu = {
            ...this.state,
            changeEditState: this.changeEditState,
        }

        return(
            <section className="generalInfo">
                <div className="generalInfoTitle">General information</div>
                {this.state.edit ? editMenu(propsEditMenu) : showMenu(propsShowMenu)}
            </section>
        );
    }
}

export default GeneralInfo;