import React from "react";

const showMenu = (props) => {
    let listOfEx = props.listOfEx.map((ex, index) => {
        return (
            <div className="experienceItem" key={"EI" + index}>
                <span>{ex.schoolName} - </span>
                <span>{ex.titleOfStudy} - </span>
                <span>{ex.dateOfStudy}</span>
            </div>
        );
    });

    return(
        <div className="educationalExperienceShow">
            {listOfEx}
            <div className="line"></div>
            <button onClick={props.changeEditState}>Edit</button>
        </div>
    );
};

const editMenu = (props) => {
    const listOfExForm = props.listOfEx.map((ex, index) => {
        return(
            <div className="experienceFormItem" key={"EFI" + index}>
                <input type="text" placeholder="school name" value={ex.schoolName} id={`schoolName-${index}`} onChange={props.handleChange} /> -  
                <input type="text" placeholder="title" value={ex.titleOfStudy} id={`titleOfStudy-${index}`} onChange={props.handleChange} /> - 
                <input type="text" placeholer="time of study" value={ex.dateOfStudy} id={`dateOfStudy-${index}`} onChange={props.handleChange} />
            </div>
        );
    });

    return(
        <div className="educationalExperienceEdit">
            {listOfExForm}
            <div className="line"></div>
            <button onClick={props.addNewEx}>Add experience</button>
            <button onClick={props.changeEditState}>Done</button>
        </div>
    );
}

class EducationalExperience extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            edit: false,
            listOfEx: [{
                schoolName: "",
                titleOfStudy: "",
                dateOfStudy: "",
            }],
        }

        this.changeEditState = this.changeEditState.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.addNewEx = this.addNewEx.bind(this);
    }

    changeEditState(){
        this.setState((prevState) => {
            return {
                edit: !prevState.edit
            };
        });
    }

    handleChange(event){
        const keys = event.target.id.split("-");
        const value = keys[0];
        const index = parseInt(keys[1]);

        this.setState((prevState) => {
            let temp = prevState.listOfEx.map((value) => {
                return Object.assign({}, value);
            });

            temp[index][value] = event.target.value;

            return {
                listOfEx: temp
            }
        });
    }

    addNewEx(){
        this.setState((prevState) => {
            let temp = prevState.listOfEx.map((value) => {
                return Object.assign({}, value);
            });

            temp.push({
                schoolName: "",
                titleOfStudy: "",
                dateOfStudy: "",
            });

            return {
                listOfEx: temp
            }
        });
    }

    render(){
        const propsEditMenu = {
            ...this.state,
            handleChange: this.handleChange,
            changeEditState: this.changeEditState,
            addNewEx: this.addNewEx,
        }

        const propsShowMenu = {
            ...this.state,
            changeEditState: this.changeEditState,
        }

        return(
            <div className="educationalExperience">
                <div className="educationalExperienceTitle">Education Experience</div>
                {this.state.edit ? editMenu(propsEditMenu) : showMenu(propsShowMenu)}
            </div>
        );
    }
}

export default EducationalExperience;