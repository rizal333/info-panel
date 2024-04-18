const { spawn } = require('child_process');
process.env.TZ = 'Asia/Jakarta';

/**
 * Function to start a command process.
 * @param {string} cmd - The command to execute.
 */
function start(cmd) {
    try {
        // Spawn the desired command process
        const childProcess = spawn(cmd, [], {
            stdio: ['inherit', 'inherit', 'inherit', 'ipc']
        });

        // Handle errors
        childProcess.on('error', (error) => {
            console.error('Error starting process:', error.message);
        });
    } catch (error) {
        console.error('Error:', error.message);
    }
}

start('bash');
