import React, {ComponentType} from 'react';
import Profile from "./Profile";
import {connect} from 'react-redux';
import {AppStateType} from "../../redux/redux-store";
import {getUserProfile} from "../../redux/profileReducer";
import {PathMatch, useMatch, useParams} from "react-router-dom";
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import {compose} from "redux";

type MapStatePropsType = ReturnType<typeof mapStateToProps>

type MapDispatchPropsType = {
    getUserProfile: (userId: string) => void
}
export type ProfilePropsType = MapStatePropsType & MapDispatchPropsType & {
    //params: Readonly<Params>
    match: PathMatch<"userId"> | null
}

class ProfileContainer extends React.Component<ProfilePropsType, {}> {

    componentDidMount() {
        let userId = this.props.match?.params.userId
        if (!userId) {userId = '11'}
        this.props.getUserProfile(userId)
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
    profile: state.profilePage.profile,
})

export const withRouter = (ProfileContainer: typeof React.Component) => {
    return (props: object) => {
        const params = useParams() // не подходит, потому что нужно видеть свой профиль при пустом адресе
        //useParams возвращает объект пары key/value (ключ/значение) параметров URL.
        const match = useMatch('/profile/:userId/');
        return (
            <ProfileContainer {...props} params={params} match={match}/>
        );
    }
}
export default compose<ComponentType>(
    connect(mapStateToProps, {getUserProfile}),
    withRouter,
    withAuthRedirect,
)(ProfileContainer)
