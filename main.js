function startClassification(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('');
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results){
    if(error){
        console.error(error);
    }
    else{
        
    }
}