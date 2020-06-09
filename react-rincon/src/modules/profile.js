import React from 'react';

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle.min';

import EmployeeService from '../services/employee.service';

import Swal from 'sweetalert2';

<<<<<<< HEAD
class addComponent extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            name: "",
            departmentId: -1,
            roleId: -1,
            tutorId: -1,
            course: "",
            imageId:-1,
            comment: "",
            image: {
                name:   "",
=======
class addComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            departamentId: -1,
            roleId: -1,
            email: "",
            tutorId: -1,
            comment: "",
            imageId: -1,
            image: {
                name: "",
>>>>>>> profesionales
                type: "",
                data: ""
            }
        };
    }

<<<<<<< HEAD
    render(){
        return(
            <div class="container p-4">
                <div class="row">
                    <div class="col-md-4">
                        <div class="card">
                            <div class="card-body">
                                <div class="form-group">
                                    <input type="text" 
                                        value={this.state.name}
                                        onChange={(value)=> this.setState({name:value.target.value})}
=======
    render() {
        return (
            <div class="container p-4">
                <div class="row">
                    <div class="col-lg-9">
                        <div class="card">
                            <div class="card-body">
                                <div class="form-group">
                                    <input type="text"
                                        value={this.state.name}
                                        onChange={(value) => this.setState({ name: value.target.value })}
>>>>>>> profesionales
                                        class="form-control" name="nombre" placeholder="nombre" autofocus
                                    />
                                </div>
                                <div class="form-group">
<<<<<<< HEAD
                                    <input type="number" 
                                        value={this.state.salary}
                                        onChange={(value)=> this.setState({salary:value.target.value})}
=======
                                    <input type="number"
                                        value={this.state.salary}
                                        onChange={(value) => this.setState({ salary: value.target.value })}
>>>>>>> profesionales
                                        class="form-control" name="salario" placeholder="salario"
                                    />
                                </div>
                                <div class="form-group">
<<<<<<< HEAD
                                    <button type="submit" class="btn btn-success" onClick={()=>this.addEmployee()}>Añadir</button>
=======
                                    <button type="submit" class="btn btn-success" onClick={() => this.addEmployee()}>Añadir</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3">
                        <div class="card">
                            <div class="card-body">
                                <div class="form-group">
                                    <input type="text"
                                        value={this.state.name}
                                        onChange={(value) => this.setState({ name: value.target.value })}
                                        class="form-control" name="nombre" placeholder="nombre" autofocus
                                    />
>>>>>>> profesionales
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

<<<<<<< HEAD
    addEmployee(){
        // parametros de datos post
        const datapost = {
        name : this.state.name,
        salary : this.state.salary,
        }

        
        EmployeeService.create(datapost)
        .then(res=>{
        if (res.data.success) {
            //alert(res.data.message);
            Swal.fire({
                position: 'top',
                icon: 'success',
                title: 'Empleado añadido correctamente!',
                showConfirmButton: false,
                timer: 2000
              })
            this.props.history.push('/list'); 
        }
        else {
            alert("Error");
        }
        }).catch(error=>{
        alert("Error 34 "+error);
        }); 
=======
    addEmployee() {
        //parametros de datos post
        const datapost = {
            name: this.state.name,
            salary: this.state.salary,
        }


        EmployeeService.create(datapost)
            .then(res => {
                if (res.data.success) {
                    //alert(res.data.message);
                    Swal.fire({
                        position: 'top',
                        icon: 'success',
                        title: 'Empleado añadido correctamente!',
                        showConfirmButton: false,
                        timer: 2000
                    })
                    this.props.history.push('/list');
                }
                else {
                    alert("Error");
                }
            }).catch(error => {
                alert("Error 34 " + error);
            });
>>>>>>> profesionales
    }
}

export default addComponent;