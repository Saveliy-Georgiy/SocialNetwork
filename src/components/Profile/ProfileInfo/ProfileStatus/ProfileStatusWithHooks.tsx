import React, {ChangeEvent, useState} from 'react';
import s from './ProfileStatus.module.css';

type ProfileStatusPropsType = {
    status: string
    updateStatus: (status: string) => void
}

const ProfileStatusWithHooks = (props: ProfileStatusPropsType) => {

    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);

    const activateEditMode = () => {
        setEditMode(true);
    };

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value);
    };

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status)
    };

    return (
        <div>
            {!editMode &&
            <div>
                <span onDoubleClick={activateEditMode}>{props.status || '----'}</span>
            </div>
            }
            {editMode &&
            <div>
                <input
                    onChange={onStatusChange}
                    value={status}
                    autoFocus={true}
                    onBlur={deactivateEditMode}
                />
            </div>
            }
        </div>
    );
};

export default ProfileStatusWithHooks;