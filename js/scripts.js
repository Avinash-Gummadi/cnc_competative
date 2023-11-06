(function ($) {
    'use strict';

    $('.service-caro').owlCarousel({
        loop: false,
        margin: 5,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    })

    $('.test-caro').owlCarousel({
        autoplay: true,
        dots: true,
        loop: true,
        nav: false,
        items: 1
    })

    $('.mobile-menu').on('click', function () {
        $('.primary-menu ul').slideToggle();
    })

})(jQuery)

var counter = function () {

    $('.section-counter').waypoint(function (direction) {

        if (direction === 'down' && !$(this.element).hasClass('ftco-animated')) {

            var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
            $(this.element).find('.number-counter').each(function () {
                var $this = $(this),
                    num = $this.data('number');
                $this.animateNumber(
                    {
                        number: num,
                        numberStep: comma_separator_number_step
                    },
                    {
                        easing: 'swing',
                        duration: 3000
                    }
                );
            });

        }

    }, { offset: '95%' });
};
counter();
var age;
var viewlist = 0;
var tempjob = ""
var tempVar = 0
function openform(option) {
    document.getElementById("errAge").innerHTML = '';
    $('#succ_rply')[0].style.display = 'none';
    if (parseInt(option) == 1) {
        if (document.getElementById("formID").style.display == "flex" && viewlist == 1) {
            console.log("scripts.js if flex");
            viewlist = 0;
            document.getElementById("formID").style.display = "none"
        } else {
            $('#formID')[0].style.display = 'flex';
            viewlist = 1;
        }
    } else if (parseInt(option) == 5) {
        $('#formID')[0].style.display = 'none';    
    } else if (parseInt(option) == 6) {
        $('#formID1')[0].style.display = 'none';
    } else {
        $('#formID1')[0].style.display = 'block';
        $('#formID')[0].style.display = 'none';
        tempjob = option;
        $('#form_div')[0].style.display = 'block';  
    }
    if (tempjob) {
        document.getElementById("heading").innerHTML = `${tempjob} Application`
    }
}

function sendCandidateEmail(){
    var formData2 = {
        pname: document.getElementById("p_name").value,
        pemail: document.getElementById("p_email").value,
        page: document.getElementById("p_age").value,
        service: document.getElementById("service").value,
        gender: document.getElementById("gender").value,
        mobile: document.getElementById("p_number").value,
    }
    if (formData2.pname!="" && formData2.pemail!="" && formData2.page!="" && formData2.service!="" && formData2.gender!="" && formData2.mobile!="") {
        const serviceId = "service_u2646wr"
        const templateId = "template_3drb5ku"
        $('#servicereq').addClass('opacity-25');
        $('#formtwoload')[0].style.display = 'block';
        emailjs.send(serviceId, templateId, formData2).then(
            res => {
                document.getElementById('servicereq').reset();
                $('#servicereq').removeClass('opacity-25');
                $('#formtwoload')[0].style.display = 'none';
            },
        ).catch(err => console.log(err));     
    } else {
        document.getElementById('all_fields2').style.display = "block";
    }
}


function sendEmail() {
    var formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        job: tempjob,
        fathername: document.getElementById("fathername").value,
        dob: document.getElementById("dob").value,
        age: age,
        // place: document.getElementById("place").value,
        qualification: document.getElementById("qualification").value,
        experience: document.getElementById("experience").value,
        address: document.getElementById("address").value,
        language: document.getElementById("language").value,
        // country: document.getElementById("country").value,
        aadhar: document.getElementById("aadhar").value,
        // account: document.getElementById("account").value,
        // ifsc: document.getElementById("ifsc").value,
        // branch: document.getElementById("branch").value,
        // religion: document.getElementById("religion").value,
        phone: document.getElementById("phone").value,
    };

    if (formData.name != "" && formData.email != "" && formData.language != "" && formData.aadhar != "" && 
        formData.phone != "" && formData.job != "" && formData.fathername != "" && formData.qualification != "" && 
        formData.experience != "" && formData.address != "") {
            const serviceId = "service_u2646wr"
            const templateId = "template_r3mc06g"
        $('.modal-backdrop').addClass('show');
        $('#shadeblack')[0].style.display = 'block';
        $('#spinner').css('display', 'flex');
        emailjs.send(serviceId, templateId, formData).then(
            res => {
                document.getElementById('formID1').reset();
                $('.modal-backdrop').removeClass('show');
                $('#shadeblack')[0].style.display = 'none';
                $('#spinner')[0].style.display = 'none';
                $('#form_div')[0].style.display = 'none';
                $('#succ_rply')[0].style.display = 'block';
            }
        ).catch(err => console.log(err));
    }
    else {
        document.getElementById('all_fields').style.display = "block";
    }
}
function calculateAge() {
    var jobdob = document.getElementById("dob").value;
    const ageDifMs = Date.now() - new Date(jobdob).getTime();
    const ageDate = new Date(ageDifMs);
    age = Math.abs(ageDate.getUTCFullYear() - 1970);
    if (age < 18) {
        document.getElementById("errAge").innerHTML = `Age is less than 18`;
        $('#errAge').removeClass('text-success');
        $('#errAge').addClass('text-danger');
        document.getElementById('submitID').disabled = true;
    }
    else {
        document.getElementById("errAge").innerText = `Your age is ${age} years`;
        $('#errAge').removeClass('text-danger');
        $('#errAge').addClass('text-success');
        document.getElementById('submitID').disabled = false;
    }
}

$("#chat-circle").click(function () {
    $("#chat-circle").toggle('scale');
    $(".chat-box").toggle('scale');
})
$(".chat-box-toggle").click(function () {
    $("#chat-circle").toggle('scale');
    $(".chat-box").toggle('scale');
})