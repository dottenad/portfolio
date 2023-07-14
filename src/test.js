import axios from "axios";

// Function to generate the QR code and display it
const generateQRCode = async (data) => {
    try {
        const response = await axios.post(
            "http://127.0.0.1:5000/generate_qr_code",
            { data }
        );
        const url = URL.createObjectURL(
            new Blob([response.data], { type: "image/png" })
        );
        // Set the image source to the generated QR code URL
        document.getElementById("qrCodeImage").src = url;
    } catch (error) {
        console.error("Error generating QR code:", error);
    }
};
