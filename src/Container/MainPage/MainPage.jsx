import './MainPage.css'
import users from './data';
const MainPage = () => {

    return (

        <div className="conatiner">

            <div>
                {
                    users.map((users) => {
                        return (
                            <>
                                <div className="card">
                                    <div className="d-flex">
                                        <div className="profile">
                                            <img src={users.image} alt="img" />
                                        </div>
                                    </div>


                                    <div className="details">
                                        <div className="name">
                                            <h2>UserName: {users.username}</h2>
                                        </div>
                                        <div className="name">
                                            <h2>E-mail: {users.email}</h2>
                                        </div>
                                        <div className='name2'>
                                            <div className="name">
                                                <h2>Full-Name: {users.firstName} {users.lastName} {users.maidenName}</h2>
                                            </div>
                                            <div className="name">
                                                <h2>Phone: {users.phone}</h2>
                                            </div>
                                            <div className="name">
                                                <h2>Dob: {users.birthDate}</h2>
                                            </div>
                                            <div className="name">
                                                <h2>Address: {users.address.address}</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </div >
        </div>

    )
}

export default MainPage;