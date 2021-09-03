import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function BootstrapUse() {
    return (
    
            <div className="bootstrapUse">
                <h1 className="text-center m-4" >Our Bootstrap Cards</h1>
                <div class="container">
                    <div class="row">
                        <div class="col-sm">
                            <div class="card">
                                <img src="https://picsum.photos/201/300" class="card-img-top" alt="..." height="300px" />
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    
                                </div>
                            </div>
                        </div>
                        <div class="col-sm">
                            <div class="card">
                                <img src="https://picsum.photos/202/300" class="card-img-top" alt="..." height="300px" />
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    
                                </div>
                            </div>
                        </div>
                        <div class="col-sm">
                            <div class="card">
                                <img src="https://picsum.photos/203/300" class="card-img-top" alt="..." height="300px" />
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
    

    );
};

export default BootstrapUse
