import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from 'react-redux';
import {AppStateType} from "../../redux/redux-store";
import {ProfileType, setUserProfile} from "../../redux/profileReducer";

/*type MapStatePropsType = {
    profile: ProfileType
}*/

type MapStatePropsType = ReturnType<typeof mapStateToProps>

type MapDispatchPropsType = {
    setUserProfile: (profile: ProfileType) => void

}
export type ProfilePropsType = MapStatePropsType & MapDispatchPropsType

class ProfileContainer extends React.Component<ProfilePropsType, {}> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/11`)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }

    render() {
        return (
            <div>
                <Profile {...this.props} />
            </div>
        );
    }
}

const mapStateToProps = (state: AppStateType) => ({
    profile: state.profilePage.profile
})

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer);