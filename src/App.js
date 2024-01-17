import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

class CustomFormValidation extends React.Component {
  submit() {
    const users = [
      { name: "John Doe", age: 25 },
      { name: "Alexander", age: 17 },
      { name: "Nelson Mandela", age: 78 },
      { name: "Mahatma Gandhi", age: 56 },
      { name: "Nikol Tesla", age: 39 },
    ];
    const sortedUsers = users.sort((a, b) => a.age - b.age);
    const sortedNames = sortedUsers.map((user) => user.name);
    window.alert("Sorted Names:\n" + sortedNames.join("\n"));
  }
  render() {
    return (
      <div className="App">
        <div class="container-fluid ps-md-0">
          <div class="row g-0">
            <div class="col-md-6 col-lg-4">
              <div class="login d-flex align-items-center py-5">
                <div class="container">
                  <div class="row">
                    <div class="col-md-9 col-lg-8 mx-auto">
                      <h1>Welcome to iECHO</h1>
                      <p>Please choose an option to continue</p>
                      <form>
                        <div class="d-grid">
                          <button
                            class="btn btn-lg btn-primary btn-login  mb-2"
                            type="button"
                            onClick={() => this.submit()}
                          >
                            Sign in
                          </button>
                        </div>
                        <div class="d-grid">
                          <button
                            class="btn btn-lg btn-primary btn-login mb-2"
                            type="button"
                            onClick={() =>
                              window.alert(
                                "Thank you for choosing mobile, [your name]"
                              )
                            }
                          >
                            Continue with Mobile
                          </button>
                        </div>
                        <div class="divider">
                          <span>
                            <p>OR</p>
                          </span>
                        </div>
                        <div class="d-grid">
                          <button
                            class="btn btn-lg btn-primary btn-login mb-2"
                            type="button"
                            disabled
                          >
                            Continue with Google
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="d-none d-md-flex col-md-4 col-lg-8"
              style={{ backgroundColor: "#C5CAE9" }}
            >
              <div class="rounded-image-container p-4">
                <img
                  src="https://iecho.org/static/media/welcomePageIllustration.svg"
                  alt="Your"
                  class="img-fluid rounded-circle mb-3"
                ></img>
                <h2>Learn from Experts and Share your Expertise</h2>
                <h5>
                  The ECHO model uses a hub-and-spoke knowledge-sharing approach
                </h5>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default CustomFormValidation;
