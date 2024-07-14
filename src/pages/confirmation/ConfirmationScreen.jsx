// components
import Logo from "@components/Logo";
import Confirmation from "@components/ConfirmationBox";
const ConfirmationScreen = () => {
    const handleUploadSuccess = (fileUrl) => {
        console.log("Successfully Uploaded");
    };

    return (
        <>
            <Logo></Logo>
            <Confirmation/>
        </>
    )
}

export default ConfirmationScreen