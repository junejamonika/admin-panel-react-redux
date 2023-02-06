import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Input,
    Avatar,
    Button
} from "@material-tailwind/react";
import {
    TrashIcon,
    PencilSquareIcon
} from "@heroicons/react/24/outline";
import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { connect } from 'react-redux';
import { getAccountDetail } from "@/store/Account/actions";
import Modal from "@/components/modal";


function Account({ account, dispatch }) {
    const [user, setUser] = useState(account);
    const { id } = useParams();
    const hiddenFileInput = useRef(null);
    useEffect(() => {
        dispatch(getAccountDetail(id))
    }, [])

    const handleFileChange = event => {
        setUser({...user, profilePic : event.target.files[0]})
    };

    const handleClick = event => {
        hiddenFileInput.current.click();
    };

    handleSave = () => {
        const formData = new FormData()

        formData.append("firstName", user.firstName)
        formData.append("lastName", user.lastName)
        formData.append("email", user.email)
        formData.append("file", user.profilePic)

        this.props.dispatch(AccountUserPatchAction.AccountUserPatch({ host: this.props.match.params.id, data: formData }))
    }
    return (
        <div className="mt-12 mb-8 flex flex-col gap-12">
            <Card>
                <CardHeader variant="gradient" color="blue" className="mb-8 p-6">
                    <Typography variant="h6" color="white">
                        Edit Account
                    </Typography>
                </CardHeader>
                <CardBody className="p-4">
                    <div className="mb-10 flex items-center justify-between gap-6">
                        <div className="flex items-center gap-6">
                            {account.profilePic ? (
                                <Avatar
                                    src={typeof account.profilePic === "object" ? URL.createObjectURL(account.profilePic) : account.profilePic}
                                    alt="bruce-mars"
                                    size="xl"
                                    className="rounded-lg shadow-lg shadow-blue-gray-500/40"
                                />) : ""}
                            <input type="file" className="d-none" name="profilePic" ref={hiddenFileInput}
                                onChange={handleFileChange} />
                            <Button variant="outlined" size="sm" onClick={handleClick}>
                                {account.profilePic ? "Change Picture" : "Upload Picture"}
                            </Button>
                        </div>
                    </div>
                    <div className="flex items-center justify-between gap-3">
                        <Input size="md" label="First Name" defaultValue={account.firstName} />
                        <Input size="md" label="Last Name" defaultValue={account.lastName} />
                        <Input size="md" label="Email" defaultValue={account.email} />
                    </div>
                    <Button onClick={() => handleSave()} variant="gradient" className="mt-4">
                        Save
                    </Button>
                </CardBody>
            </Card>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        account: state.account.account
    }
}

export default connect(mapStateToProps)(Account)

