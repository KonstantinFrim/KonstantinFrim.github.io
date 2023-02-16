
function responsiveChart() {
    if(window.outerWidth > 500) {
        Chart.defaults.font.size = 18;
    };
    if(window.outerWidth > 1200) {
        Chart.defaults.font.size = 22;
    };
    if(window.outerWidth > 2000) {
        Chart.defaults.font.size = 28;
    };
    if(window.outerWidth > 2600) {
        Chart.defaults.font.size = 34;
    };
    chartVerbrauch.update();
}

Chart.defaults.font.family = 'Montserrat';

hamburger = document.querySelector(".hamburger");
hamburger.onclick = function() {
    navBar = document.querySelector(".nav-bar");
    navBar.classList.toggle("active");
}


// function drawChart () {
// Verbrauch
const labelsVerbrauch = [
    '1990',
    '1991',
    '1992',
    '1993',
    '1994',
    '1995',
    '1996',
    '1997',
    '1998',
    '1999',
    '2000',
    '2001',
    '2002',
    '2003',
    '2004',
    '2005',
    '2006',
    '2007',
    '2008',
    '2009',
    '2010',
    '2011',
    '2012',
    '2013',
    '2014',
    '2015',
    '2016',
    '2017',
    '2018',
    '2019',
    '2020',
    '2021',
];

const dataVerbrauch = {
    labels: labelsVerbrauch,
    datasets: [{
        label: ' Verbrauch China',
        backgroundColor: '#F84F39',
        borderColor: '#F84F39',
			fill: {
				target: 'origin',
				above: '#F84F3933',
			},
        data: [507, 581, 645, 716, 798, 848, 916, 953, 986, 1044, 1138, 1241, 1380, 1605, 1859, 2126, 2446, 2817, 2989, 3223, 3626, 4052, 4326, 4718, 5058, 5098, 5389, 5880, 6439, 6807, 7028, 7714],
    },{
        label: 'Verbrauch USA',
        backgroundColor: '#AADF40',
        borderColor: '#AADF40',
        data: [2716, 2854, 2866, 2963, 3047, 3136, 3221, 3271, 3374, 3460, 3590, 3554, 3632, 3662, 3716, 3811, 3818, 3922, 3907, 3725, 3894, 3885, 3831, 3872, 3895, 3895, 3922, 3887, 4043, 3964, 3803, 3869],
        hidden: true,
    },{
        label: ' Verbrauch Deutschland',
        backgroundColor: '#4BE6F0',
        borderColor: '#4BE6F0',
        data: [481, 481, 476, 467, 465, 473, 480, 483, 487, 491, 501, 513, 526, 532, 538, 539, 545, 546, 543, 514, 547, 540, 538, 536, 525, 528, 531, 531, 522, 508, 490, 503],
        hidden: true,
    },{
			label: 'Produktion China',
			backgroundColor: '#F24C00',
			borderColor: '#F24C00',
			data: [624, 678, 754, 838, 928, 1008, 1080, 1136, 1168, 1240, 1356, 1481, 1654, 1911, 2204, 2500, 2866, 3282, 3467, 3715, 4208, 4716, 4994, 5447, 5817, 5854, 6200, 6715, 7143, 7504, 7782, 8537],
			hidden: true,
	},{
			label: 'Produktion USA',
			backgroundColor: '#AADF40',
			borderColor: '#AADF40',
			data: [3219, 3276, 3291, 3411, 3473, 3582, 3677, 3698, 3830, 3898, 4053, 3865, 4051, 4082, 4175, 4294, 4301, 4350, 4368, 4188, 4378, 4349, 4291, 4306, 4340, 4317, 4322, 4286, 4455, 4392, 4265, 4381],
			hidden: true,
	},{
			label: 'Produktion Deutschland',
			backgroundColor: '#4BE6F0',
			borderColor: '#4BE6F0',
			data: [550, 540, 537, 526, 529, 537, 555, 552, 556, 556, 577, 586, 587, 609, 618, 623, 640, 641, 641, 596, 633, 613, 628, 639, 628, 648, 650, 654, 640, 607, 573, 584],
			hidden: true,
	}]
};

const configVerbrauch = {
    type: 'line',
    data: dataVerbrauch,
    options: {
        plugins: {
            legend: {
                display: false,
                labels: {
                    color: '#948d99'
                }
            },
            title: {
                display: false,
                text: 'Stromverbrauch',
                color: '#948d99',
                font: {
                    size: '30px'
                }
            }
        },
        scales: {
            x: {
                ticks: {
                    color: '#948d99'
                },
                grid: {
                    display: false,
                    borderColor: '#948d99'
                }
            },
            y: {
                ticks: {
                    color: '#948d99'
                },
                grid: {
                    display: false,
                    borderColor: '#948d99'
                },
                title: {
                    display: true,
                    text: 'TWh',
                    color: '#948d99'
                }
            }
        },
        maintainAspectRatio: false,
            font: {
                family: 'Montserrat'
                
            },
    }
};



const chartVerbrauch = new Chart(
    document.getElementById('chart_verbrauch'),
    configVerbrauch
);
// }


// window.onload = function () {
//     if(window.innerWidth >= 2600) {
//     Chart.defaults.font.size = 40;
//     } else {
//     Chart.defaults.font.size = 15;
//     }
// }

window.onload = function() {
    responsiveChart()
}


//Verbrauch toggle
function toggleDataV(value) {
    const showValue = chartVerbrauch.isDatasetVisible(value);
    if(showValue === true) {
        chartVerbrauch.hide(value);
    }
    if(showValue === false) {
        chartVerbrauch.show(value);
    }
};

function hideV(value) {
	chartVerbrauch.hide(value)
};

function hideP(value) {
	chartVerbrauch.hide(value)
};

function showV(value) {
	chartVerbrauch.show(value)
};

function showP(value) {
	chartVerbrauch.show(value)
};

// btnV color
let ChinaButton = document.getElementById("China_btnV");

ChinaButton.addEventListener("click", () => {
    ChinaButton.classList.toggle("clicked");
});

let USAButton = document.getElementById("USA_btnV");

USAButton.addEventListener("click", () => {
    USAButton.classList.toggle("clicked");
});

let DEButton = document.getElementById("DE_btnV");

DEButton.addEventListener("click", () => {
    DEButton.classList.toggle("clicked");
});

// Produktion

const labelsProduktion = [
    '1990',
    '1991',
    '1992',
    '1993',
    '1994',
    '1995',
    '1996',
    '1997',
    '1998',
    '1999',
    '2000',
    '2001',
    '2002',
    '2003',
    '2004',
    '2005',
    '2006',
    '2007',
    '2008',
    '2009',
    '2010',
    '2011',
    '2012',
    '2013',
    '2014',
    '2015',
    '2016',
    '2017',
    '2018',
    '2019',
    '2020',
    '2021',
];

const dataProduktion = {
    labels: labelsProduktion,
    datasets: [{
        label: 'China',
        backgroundColor: '#F84F39',
        borderColor: '#F84F39',
        data: [624, 678, 754, 838, 928, 1008, 1080, 1136, 1168, 1240, 1356, 1481, 1654, 1911, 2204, 2500, 2866, 3282, 3467, 3715, 4208, 4716, 4994, 5447, 5817, 5854, 6200, 6715, 7143, 7504, 7782, 8537],
    },{
        label: 'USA',
        backgroundColor: '#AADF40',
        borderColor: '#AADF40',
        data: [3219, 3276, 3291, 3411, 3473, 3582, 3677, 3698, 3830, 3898, 4053, 3865, 4051, 4082, 4175, 4294, 4301, 4350, 4368, 4188, 4378, 4349, 4291, 4306, 4340, 4317, 4322, 4286, 4455, 4392, 4265, 4381],
        hidden: true,
    },{
        label: 'Deutschland',
        backgroundColor: '#4BE6F0',
        borderColor: '#4BE6F0',
        data: [550, 540, 537, 526, 529, 537, 555, 552, 556, 556, 577, 586, 587, 609, 618, 623, 640, 641, 641, 596, 633, 613, 628, 639, 628, 648, 650, 654, 640, 607, 573, 584],
        hidden: true,
    }]
};

const configProduktion = {
    type: 'line',
    data: dataProduktion,
    options: {
        plugins: {
            legend: {
                display: false,
                labels: {
                    color: '#948d99'
                }
            },
            title: {
                display: true,
                text: 'Stromproduktion',
                color: '#948d99',
                font: {
                    size: '30px'
                }
            }
        },
        scales: {
            x: {
                ticks: {
                    color: '#948d99'
                },
                grid: {
                    display: false,
                    borderColor: '#948d99'
                }
            },
            y: {
                ticks: {
                    color: '#948d99'
                },
                grid: {
                    display: false,
                    borderColor: '#948d99'
                },
                title: {
                    display: true,
                    text: 'TWh',
                    color: '#948d99'
                }
            }
        },
        maintainAspectRatio: false,
            font: {
                family: 'Montserrat'
                
            },
    }
};

const chartProduktion = new Chart(
    document.getElementById('chart_produktion'),
    configProduktion
);

//Produktion toggle
function toggleDataP(value) {
    const showValue = chartProduktion.isDatasetVisible(value);
    if(showValue === true) {
        chartProduktion.hide(value);
    }
    if(showValue === false) {
        chartProduktion.show(value);
    }
};

// btnP color
let ChinaButtonP = document.getElementById("China_btnP");

ChinaButtonP.addEventListener("click", () => {
    ChinaButtonP.classList.toggle("clicked");
});

let USAButtonP = document.getElementById("USA_btnP");

USAButtonP.addEventListener("click", () => {
    USAButtonP.classList.toggle("clicked");
});

let DEButtonP = document.getElementById("DE_btnP");

DEButtonP.addEventListener("click", () => {
    DEButtonP.classList.toggle("clicked");
})

//Strommix

const labelsStrommix = [
	'Wasser',
	'Wind',
	'Solar',
	'Kohle',
	'Nuklear',
	'Gas',
	'Andere',
];

const dataStrommix = {
	labels: labelsStrommix,
	datasets: [{
		label: 'Strommix in China',
		data: [17.3, 5.5, 3.1, 62.2, 4.8, 3.2, 3.9],
		backgroundColor: [
			'#4285F4',
			'#34A853',
			'#FBBC05',
			'#4D4D4D',
			'#999999',
			'#B2B2B2',
			'#CBCBCB'
		],
		borderWidth: 7,
		hoverOffset: 4
	}]
};

const configStrommix = {
	type: 'doughnut',
	data: dataStrommix,
	options: {
		plugins: {
			legend: {
				display: false,
			},
			title: {
				display: false,
				text: 'Strommix in China',
				position: 'right',
				font: {
					size: '30px'
				}
			}
		},
		maintainAspectRatio: false,
	}
};

const chartStrommix = new Chart(
	document.getElementById('chart_strommix'),
	configStrommix
);


//Strommix toggle

function toggleDataM(value) {
	const {
		type
	} = chartStrommix.config;
	chartStrommix.toggleDataVisibility(value);
	chartStrommix.update();
};


//function toggleDataM(value) {
//    const showValue = chartStrommix.isDatasetVisible(value);
//    if(showValue === true) {
//        chartStrommix.hide(value);
//    }
//    if(showValue === false) {
//        chartStrommix.show(value);
//    }
//};




function hide() {
  var element = document.getElementById("btnTest1");
  element.classList.toggle("hide");
};

function hide2() {
  var element = document.getElementById("btnTest2");
  element.classList.toggle("unhide");
}


function switchToProduktion() {
	chartVerbrauch.hide(0);
	chartVerbrauch.hide(1);
	chartVerbrauch.hide(2);
	chartVerbrauch.show(3);
	chartVerbrauch.hide(4);
	chartVerbrauch.hide(5);
	
	var element = document.getElementById("China_btnP");
	element.classList.remove("clicked");
	
	var element = document.getElementById("USA_btnP");
	element.classList.remove("clicked");
	
	var element = document.getElementById("DE_btnP");
	element.classList.remove("clicked");
	
  	var element = document.getElementById("btnTest1");
  	element.classList.add("hide");

  	var element = document.getElementById("btnTest2");
  	element.classList.add("unhide");

    var element = document.getElementById("linkVerbrauchDesktop");
    element.classList.add("hide");

    var element = document.getElementById("linkProduktionDesktop");
    element.classList.remove("hide");

	var element = document.getElementById("btnToVerbrauch");
	element.style.textDecoration = 'line-through';
	element.style.color = '#948d99';
	
	var element = document.getElementById("btnToProduktion");
	element.style.color = '#DC575A';
	element.style.textDecoration = 'none';
	
};

function switchToVerbrauch() {
	chartVerbrauch.show(0);
	chartVerbrauch.hide(1);
	chartVerbrauch.hide(2);
	chartVerbrauch.hide(3);
	chartVerbrauch.hide(4);
	chartVerbrauch.hide(5);
	
	var element = document.getElementById("China_btnV");
	element.classList.remove("clicked");
	
	var element = document.getElementById("USA_btnV");
	element.classList.remove("clicked");
	
	var element = document.getElementById("DE_btnV");
	element.classList.remove("clicked");
	
	var element = document.getElementById("btnTest1");
  	element.classList.remove("hide");

  	var element = document.getElementById("btnTest2");
  	element.classList.remove("unhide");

    var element = document.getElementById("linkProduktionDesktop");
    element.classList.add("hide");

    var element = document.getElementById("linkVerbrauchDesktop");
  	element.classList.remove("hide");

	var element = document.getElementById("btnToVerbrauch");
	element.style.color = '#5FC471';
	element.style.textDecoration = 'none';
	
	var element = document.getElementById("btnToProduktion");
	element.style.color = '#948d99';
	element.style.textDecoration = 'line-through';
};







function Test1() {
	var element = document.getElementById("btnTest1");
	element.classList.toggle("hide");
	
	var element = document.getElementById("btnTest2");
	element.classList.toggle("unhide");
};

function Test2() {
	var element = document.getElementById("btnTest1");
	element.classList.toggle("hide");
	
	var element = document.getElementById("btnTest2");
	element.classList.toggle("unhide");
};

let WasserButton = document.getElementById("Wasser_btn");

WasserButton.addEventListener("click", () => {
    WasserButton.classList.toggle("cross");
});

let WindButton = document.getElementById("Wind_btn");

WindButton.addEventListener("click", () => {
    WindButton.classList.toggle("cross");
});

let SolarButton = document.getElementById("Solar_btn");

SolarButton.addEventListener("click", () => {
    SolarButton.classList.toggle("cross");
});

let KohleButton = document.getElementById("Kohle_btn");

KohleButton.addEventListener("click", () => {
    KohleButton.classList.toggle("cross");
});

let NuklearButton = document.getElementById("Nuklear_btn");

NuklearButton.addEventListener("click", () => {
    NuklearButton.classList.toggle("cross");
});

let GasButton = document.getElementById("Gas_btn");

GasButton.addEventListener("click", () => {
    GasButton.classList.toggle("cross");
});

let AndereButton = document.getElementById("Andere_btn");

AndereButton.addEventListener("click", () => {
    AndereButton.classList.toggle("cross");
});

// Chart.defaults.font.size = 25;

function responsiveChart() {
    if(window.outerWidth > 500) {
        Chart.defaults.font.size = 18;
    };
    if(window.outerWidth > 1200) {
        Chart.defaults.font.size = 22;
    };
    if(window.outerWidth > 2000) {
        Chart.defaults.font.size = 28;
    };
    if(window.outerWidth > 2600) {
        Chart.defaults.font.size = 34;
    };
    if(window.outerWidth > 3000) {
        Chart.defaults.font.size = 40;
    };
    
    chartVerbrauch.update();
}