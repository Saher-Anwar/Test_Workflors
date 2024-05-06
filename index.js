const core = require('@actions/core')
const fs = require('fs')

async function run() {
    try {
      // Get the value of the 'file-path' input
      const filePath = core.getInput('file-path', { required: true });
  
      // Read the content of the file
      const fileContent = fs.readFileSync(filePath, 'utf8');
  
      // Your logic to process the file content and generate output
      // For demonstration, let's just log the file content
      console.log('File content:', fileContent);
  
      // Set the output 'results-file' with the path to the results file
      core.setOutput('results-file', 'path/to/results-file.txt');
    } catch (error) {
      // If an error occurs, set the action as failed
      core.setFailed(error.message);
    }
  }
  
  // Run the 'run' function
  run();
  