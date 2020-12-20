import React from "react";





class SignUp extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            form: {
                name: "",
                nickname: "",
                description: "",
                email: "",
                password: "",
                role: "",
            },
        };
    };

    handleOnChangeInput = (event) =>{
        const {name, value} = event.target

        this.setState({
            form:{...this.state.form, [name]: value}
        });
    };

    render(){
        const {form}=this.state;
        console.log(form);
        return(
            <div>
                <h1>Cadastre-se</h1>

                <form>
                    <input
                        name="name"
                        value={form.name}
                        onChange={this.handleOnChangeInput}
                        type="text"
                        placeholder="Name"
                    />
                    <input
                        name="nickname"
                        value={form.nickname}
                        onChange={this.handleOnChangeInput}
                        type="text"
                        placeholder="Nickname"
                    />
                    <input
                        name="email"
                        value={form.email}
                        onChange={this.handleOnChangeInput}
                        type="text"
                        placeholder="email"
                    />
                    <input
                        name="password"
                        value={form.password}
                        onChange={this.handleOnChangeInput}
                        type="text"
                        placeholder="password"
                    />
                    


                </form>
            </div>
        );
    };
};

export default SignUp;