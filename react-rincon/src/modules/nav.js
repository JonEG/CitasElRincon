import React from 'react';

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle.min';
import { GoogleLogout } from 'react-google-login';

class navComponent extends React.Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">IES EL RINCON</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="/list">Ver Empleados </a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="/add">Añadir</a>
            </li>
            {this.controlSignOut()}
          </ul>
        </div>
      </nav>
    );
  }

  controlSignOut() {
    /*{#if links.username}*}
            <li class="nav-item active">
                <a class="nav-link" href="/signout">Salir</a>
            </li>
            {/*{/if}*}
            <li class="nav-item">
                {/*{#if links.username}*}
                <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">{links.username}</a>
                {/*{else}*}
                <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Not Logged</a>
            </li>
            {/*{/if}*/

    if (sessionStorage.getItem("userName")) {
      return (
        <li class="nav-item active">
          <GoogleLogout
            clientId="820637070016-genrk31ge28bjg97du1q9bkvsa0p6bdq.apps.googleusercontent.com"
            buttonText="Salir"
          ></GoogleLogout>
        </li>
      );
    }
  }
}

export default navComponent;


