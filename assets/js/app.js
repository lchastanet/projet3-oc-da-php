$(document).ready(function () {
    $(window).on('scroll', function () {
        if ($(window).scrollTop()) {
            $('#navbar').removeClass('navbar-transparent')
        } else {
            $('#navbar').addClass('navbar-transparent')
        }
    })
    $('#carouselArticles').carousel({
        interval: 200000
    })
    $('#prevButton').click(function () {
        $('#carouselArticles').carousel('prev')
    })
    $('#nextButton').click(function () {
        $('#carouselArticles').carousel('next')
    })
    $("nav ul li a[href^='#']").on('click', function(e) {
        e.preventDefault()

        let hash = this.hash

        $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 700, function(){
            window.location.hash = hash;
          })
     
     })
})

function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 48.8796835,
            lng: 2.308955
        },
        zoom: 15,
        styles: [{
                "featureType": "all",
                "elementType": "labels",
                "stylers": [{
                    "visibility": "on"
                }]
            },
            {
                "featureType": "all",
                "elementType": "labels.text.fill",
                "stylers": [{
                        "saturation": 36
                    },
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 40
                    }
                ]
            },
            {
                "featureType": "all",
                "elementType": "labels.text.stroke",
                "stylers": [{
                        "visibility": "on"
                    },
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 16
                    }
                ]
            },
            {
                "featureType": "all",
                "elementType": "labels.icon",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry.fill",
                "stylers": [{
                        "color": "#000000"
                    },
                    {
                        "lightness": 20
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry.stroke",
                "stylers": [{
                        "color": "#000000"
                    },
                    {
                        "lightness": 17
                    },
                    {
                        "weight": 1.2
                    }
                ]
            },
            {
                "featureType": "administrative.locality",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#c4c4c4"
                }]
            },
            {
                "featureType": "administrative.neighborhood",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#707070"
                }]
            },
            {
                "featureType": "landscape",
                "elementType": "geometry",
                "stylers": [{
                        "color": "#000000"
                    },
                    {
                        "lightness": 20
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [{
                        "color": "#000000"
                    },
                    {
                        "lightness": 21
                    },
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "poi.business",
                "elementType": "geometry",
                "stylers": [{
                    "visibility": "on"
                }]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.fill",
                "stylers": [{
                        "color": "#be2026"
                    },
                    {
                        "lightness": "0"
                    },
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels.text.stroke",
                "stylers": [{
                        "visibility": "off"
                    },
                    {
                        "hue": "#ff000a"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry",
                "stylers": [{
                        "color": "#000000"
                    },
                    {
                        "lightness": 18
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#575757"
                }]
            },
            {
                "featureType": "road.arterial",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#ffffff"
                }]
            },
            {
                "featureType": "road.arterial",
                "elementType": "labels.text.stroke",
                "stylers": [{
                    "color": "#2c2c2c"
                }]
            },
            {
                "featureType": "road.local",
                "elementType": "geometry",
                "stylers": [{
                        "color": "#000000"
                    },
                    {
                        "lightness": 16
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#999999"
                }]
            },
            {
                "featureType": "road.local",
                "elementType": "labels.text.stroke",
                "stylers": [{
                    "saturation": "-52"
                }]
            },
            {
                "featureType": "transit",
                "elementType": "geometry",
                "stylers": [{
                        "color": "#000000"
                    },
                    {
                        "lightness": 19
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [{
                        "color": "#000000"
                    },
                    {
                        "lightness": 17
                    }
                ]
            }
        ],
        zoomControl: true,
        mapTypeControl: false,
        scaleControl: true,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: false
    })
    let marker = new google.maps.Marker({
        position: {
            lat: 48.8796835,
            lng: 2.308955
        },
        map: map
    })
}