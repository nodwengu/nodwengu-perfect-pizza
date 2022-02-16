const checkpointURL = "model.json"; // model topology
const metadataURL = "metadata.json"; // model metadata

module.exports = function () {

   // more documentation available at
   // https://github.com/tensorflow/tfjs-models/tree/master/speech-commands

   // the link to your model provided by Teachable Machine export panel
   const URL = "./my_model/";

   async function createModel() {
      const checkpointURL = URL + "model.json"; // model topology
      const metadataURL = URL + "metadata.json"; // model metadata

      const recognizer = speechCommands.create(
         "BROWSER_FFT", // fourier transform type, not useful to change
         undefined, // speech commands vocabulary feature, not useful for your models
         checkpointURL,
         metadataURL
      );

      // check that model and metadata are loaded via HTTPS requests.
      await recognizer.ensureModelLoaded();

      return recognizer;
   }

   function test() {
      console.log("factory working!");
   }

   return {
      test
   }

}