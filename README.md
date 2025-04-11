# ID Card Generator

This project is a **React-based ID Card Generator** that allows users to input their details and generate a personalized ID card. The ID card includes a **QR code** containing the user's basic information and can be downloaded as a PNG image. The application provides two customizable templates for the ID card layout.

---

## Features

- **User Input Form**: Collects user details such as name, roll number, class, section, allergies, rack number, bus route, and photo.
- **Dynamic ID Card Generation**: Generates an ID card based on the provided user information.
- **QR Code Integration**: Embeds a QR code on the ID card containing the user's basic information.
- **Two Layout Options**: Users can toggle between two different ID card templates (horizontal and vertical layouts).
- **Download as PNG**: Allows users to download the generated ID card as a PNG image.
- **Allergy Management**: Users can select multiple allergies or specify "None" if no allergies exist.

---

## Screenshots

### Horizontal Template

![image alt](<https://github.com/Priyanshu1502/ID_Card_Generator/blob/main/student-id-card-john-doe%20(1).png?raw=true>)

### Vertical Template

![image alt](https://github.com/Priyanshu1502/ID_Card_Generator/blob/main/student-id-card-john-doe.png?raw=true)

---

## How to Use

1. **Fill Out the Form**: Enter the required details in the form, including name, roll number, class, section, allergies, rack number, bus route, and upload a photo.
2. **Generate ID Card**: Submit the form to generate the ID card.
3. **Switch Layout**: Use the "Change Layout" button to toggle between horizontal and vertical templates.
4. **Download as PNG**: Click the "Download as PNG" button to save the ID card as an image file.

---

## Technologies Used

- **React**: For building the user interface.
- **Tailwind CSS**: For styling the application.
- **QRCode.react**: For generating QR codes.
- **html-to-image**: For converting the ID card to a downloadable PNG image.

---

## Project Structure

- **`src/components/IDCard.jsx`**: Contains the logic and layout for generating the ID card.
- **`src/App.jsx`**: Manages the user input form and passes data to the `IDCard` component.

---

## Installation and Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/Priyanshu1502/ID_Card_Generator.git
   cd id-card-generator
   ```
