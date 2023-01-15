Webcam.set({
    width: 450,
    height: 300,
    image_format: 'png',
    png_quality: 90

});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function capture() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="' + data_uri + '"/>';
    });
}

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/ahf710tZY/model.json', modelLoaded);
modelLoaded;//
function modelLoaded() {

}

function identify ()
{
    img=document.getElementById('captured_image');//check
    classifier.classify(img, gotResult);
}

function gotResult(error, results)         //declaring gotresult function 
{ if (error) {
    console.error(error);
} else {
    console.log(results)
    document.getElementById("result_object_name").innerHTML = results[0].label;
    document.getElementById("result_object_accuracy").innerHTML= results[0].confidence.toFixed(3);
}
    
}
