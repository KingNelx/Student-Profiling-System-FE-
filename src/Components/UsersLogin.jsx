import student from '../Images/student.png'
import UsersTopNav from './UsersTopNav';

const UsersLogin = () => {
    return (
        <>
            <UsersTopNav />
            <div>
                <div class="container text-center">
                    <div class="row">
                        <div class="col">
                            <div class="card" style={
                                { width: "18rem" }
                            }>
                                <img src={student} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">STUDENT</h5>
                                    <a href="#" class="btn btn-primary">Sign in</a>
                                </div>
                            </div>
                        </div>

                        <div class="col">
                            <div class="card" style={
                                { width: "18rem" }
                            }>
                                <img src="..." class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">CLERK</h5>
                                    <a href="#" class="btn btn-primary">Sign in</a>
                                </div>
                            </div>
                        </div>

                        <div class="col">
                            <div class="card" style={
                                { width: "18rem" }
                            }>
                                <img src="..." class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">ADMIN</h5>
                                    <a href="#" class="btn btn-primary">Sign in</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default UsersLogin;
