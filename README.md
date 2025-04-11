# ID Card Generator

This project is a **React-based ID Card Generator** that allows users to input their details and generate a personalized ID card. The ID card includes a **QR code** containing the user's basic information and can be downloaded as a PNG image. The application provides two customizable templates for the ID card layout.

## This app is live at https://idgeneratoruser.netlify.app/

## Features

- **User Input Form**: Collects user details such as name, roll number, class, section, allergies, rack number, bus route, and photo.
- **Dynamic ID Card Generation**: Generates an ID card based on the provided user information.
- **QR Code Integration**: Embeds a QR code on the ID card containing the user's basic information.
- **Two Layout Options**: Users can toggle between two different ID card templates (horizontal and vertical layouts).
- **Download as PNG**: Allows users to download the generated ID card as a PNG image.
- **Allergy Management**: Users can select multiple allergies or specify "None" if no allergies exist.
- **Data Persistence**: User data is saved in the browser's **local storage**, allowing the form to retain previously entered information even after refreshing the page.

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

## My Thought Process

While creating this project, my primary focus was to ensure that the application remained simple, functional, and aligned with its core purpose. I avoided adding unnecessary npm packages to keep the development process straightforward and prevent potential complications. The project was divided into three main phases:

1. **Form and Basic Structure**:  
   The first step was to create the form and establish the basic structure of the website. This form serves as the foundation for collecting user data, such as name, roll number, class, section, allergies, rack number, bus route, and photo. The design was kept minimal yet visually appealing to ensure ease of use and a clean user experience.

2. **ID Card Component**:  
   After completing the form, I developed the ID Card component. This component is responsible for displaying the generated ID card based on the user's input. It includes two toggleable layouts (horizontal and vertical) to provide flexibility and customization for the user. The component also integrates a QR code that encodes the user's basic information.

3. **Integration of Packages**:  
   The final step was integrating the necessary packages to achieve the desired functionality:
   - **`qrcode.react`**: Used for generating QR codes. One challenge I faced was handling the "data too long" error caused by including image data in the QR code. To resolve this, I ensured that only essential user information was encoded in the QR code, excluding the image data.
   - **`html-to-image`**: Used for converting the ID card into a downloadable PNG image. The main challenge here was correctly using the `ref` to capture the ID card component for image generation. Proper placement and management of the `ref` ensured smooth functionality.

### Key Considerations

- The project was designed to perform its intended function flawlessly while maintaining a clean and user-friendly layout.
- The application leverages **local storage** to persist user data, ensuring that previously entered information is retained even after refreshing the page. This feature enhances the user experience by saving time and effort.

By following this structured approach, I was able to create a project that is both functional and easy to use, with a focus on simplicity and efficiency.
