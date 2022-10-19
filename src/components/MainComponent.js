import React, { Component } from "react";
import { GrammarlyEditorPlugin } from "@grammarly/editor-sdk-react";
class MainComponent extends Component {
  constructor(props) {
    super(props);
    this.settings = {
      clientId: `client_L6G18CbSFJtGWbtz2xsuZ3`,
      grammarLink: `https://github.com/Sparky4567/grammarly`,
      message: `Source code is public now (change your client id and spin off your
        own versions) [I recommend Github and Cloudflare pages to make development faster]`,
    };
    this.textAreaStyle = {
      height: 80 + `vh`,
      background: `gray`,
      color: `white`,
      fontWeight: `400`,
      letterSpacing: `0.7px`,
    };
  }

  render() {
    return (
      <div className="container">
        <div className="row align-items-center vh-100">
          <div className="col-12 text-center">
            <div className="card">
              <p>{this.settings.message}</p>
              <p>
                <a
                  href={this.settings.grammarLink}
                  rel="noreferrer"
                  target="_blank"
                >
                  {this.settings.grammarLink}
                </a>
              </p>
            </div>
          </div>
          <div className="col-12">
            <GrammarlyEditorPlugin clientId={this.settings.clientId}>
              <textarea className="form-control" style={this.textAreaStyle} />
            </GrammarlyEditorPlugin>
          </div>
        </div>
      </div>
    );
  }
}

export default MainComponent;
