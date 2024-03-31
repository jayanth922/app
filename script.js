// Function to send API request to Lambda function
async function sendRequest() {
  try {
    // Send request to Lambda function to get pre-signed URL
    const response = await fetch('https://tzzbrzpvv1.execute-api.ap-south-1.amazonaws.com/default/presigned-url');
    const data = await response.json();

    // Extract uploadURL and photoFilename from the response
    const { uploadURL, photoFilename } = data;

    // Get the file selected by the user
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];

    // Send PUT request to uploadURL with the file
    const uploadResponse = await fetch(uploadURL, {
      method: 'PUT',
      body: file
    });
    
    if (uploadResponse.ok) {
      console.log('File uploaded successfully');
    } else {
      console.error('Failed to upload file');
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

// Event listener for the button click
document.getElementById('submit').addEventListener('click', sendRequest);
