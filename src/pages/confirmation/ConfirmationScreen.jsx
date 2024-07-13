// components
import Logo from "@components/Logo";
import Confirmation from "@components/ConfirmationBox";
import Upload from "@widgets/Upload";
import FirebaseImageUpload from "../../networking/Firebase/storage/FirebaseImageUpload";
const ConfirmationScreen = () => {
    const handleUploadSuccess = (fileUrl) => {
        console.log("Successfully Uploaded");
    };

    return (
        <>
            <Logo></Logo>
            <Confirmation/>
            <FirebaseImageUpload
                onUploadSuccess={handleUploadSuccess}
                // path={`conversations/${selectedConversation.id}/files`}
                path={`conversations/files`}
                filename={"Kundenvertrag"}
            />
        </>
    )
}

export default ConfirmationScreen