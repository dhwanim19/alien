function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundclassifier('https://teachablemachine.withgoogle.com/models/[...]',modelready);
}


function modelready(){
    classifier.classify(gotResuts);
}


function gotResults(error,results){
    if(error) {
        console.error(error);
    }else {
        console.log(results);
        random_number_r = (Math.random()* 255)
        random_number_g = (Math.random()* 255)
        random_number_b = (Math.random()* 255)


        img = document.getElementById('alien1')
        img1 = document.getElementById('alien2')
        img2 = document.getElementById('alien3')
        img4 = document.getElementById('alien4')

        if(results[0].label=="clap"){
            img.src =  'aliens-01.gif';
            img1.src = 'aliens-02.gif';
            img2.src = 'aliens-03.gif';
            img3.src = 'aliens-04.gif';
        }
        if(results[0].label== "bell"){
            img.src = 'aliens-01.gif';
            img1.src = 'alens-02.gif';
            img2.src = 'aliens-03.gif';
            img3.src = 'aliens-04.gif';
        }

        else if(results[0].label=="snapping"){
            img.src  =   'aliens-01.png';
            img1.src =   'aliens-02.png';
            img2.src =   'aliens -03.png';
            img3.src =   'aliens-4.png';
        }
        else (results[0].label=="backround noise"){
            img.src = 'aliens-01.png';
            img1.src = 'aliens-02.png';
            img2.src = 'aliens-03.png';
            img3.src =  'aliens-03.png';
        }


    }

}