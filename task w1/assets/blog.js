let show=[];

function project(event){
    event.preventDefault();

    let title = document.getElementById("projectInput").value;
    let start = document.getElementById("startInput").value;
    let end = document.getElementById("endInput").value;
    let description = document.getElementById("description").value;
    let python = document.getElementById("check-python").checked;
    let java = document.getElementById("check-java").checked;
    let ruby = document.getElementById("check-ruby").checked;
    let typeScript = document.getElementById("check-typeScript").checked;
    let upload = document.getElementById("upload").files;

    upload = URL.createObjectURL(upload[0]);
    console.log(upload);

    const grup = {
        title, 
        start,
        end,
        description,
        python,
        java,
        ruby,
        typeScript,
    };

    show.push(grup);
    console.log(show);
    addproject();

}

function addproject(){
    function addproject(){
        document.getElementById("New").innerHTML="";
    }
}

