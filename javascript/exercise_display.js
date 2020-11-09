let exerciseVideos = {
    "74": ["QZEqB6wUPxQ", "LY1V6UbRHFM", "kwG2ipFRgfo", "WeZLdaLggAo", "1uALedUe19k"],
    "80": ["zG2xJ0Q5QtI", "1EO5_oFF3ck", "gnKqYIPUgKs", "fIWP-FRFNU0", "prAKEcaMbRo"],
    "81": ["ykJmrZ5v0Oo", "in7PaeYlhrM", "yTWO2th-RIY", "av7-8igSXTs", "Nkl8WnH6tDU"],
    "82": ["vi1-BOcj3cQ", "yN6Q1UI_xkE", "2z8JmcrW-As", "o5qr9PFOv8w", "sM6XUdt1rm4"],
    "83": ["5eze7-878bY", "jdFzYGmvDyg", "c3ZGl4pAwZ4", "NT3R9CYxbjE", "2IUoEAzjZqY"],
    "84": ["Ip6PTlHWcpA", "JImgCWzCHwI", "gXbSA9EKUtA", "d_KZxkY_0cM", "NLXOsR8AUgg"],
    "85": ["Ip6PTlHWcpA", "ItLKDvhO8RU", "gXbSA9EKUtA", "JImgCWzCHwI", "d_KZxkY_0cM"],
    "86": ["zC3nLlEvin4", "7jqi2qWAUJk", "TwD-YGVP4Bk", "EdWCF9-ZAJI", "qia2yOo6VJo"],
    "87": ["qEwKCR5JCog", "zvRVGg8Jl5M", "Jvj2wV0vOYU", "VmB1G1K7v94", "zC3nLlEvin4"],
    "88": ["9ZWm481YDhY", "vEUyEOVn3yM", "Nv43VSWWGtc", "nEF0bv2FW94", "wgfRdcVFLkg"],
    "89": ["GzmlxvSFE7A", "PwOwL4B6iw4", "3jxrjl4B8-U", "QLI40pQ6O74", "zoU-NBo1OI8"],
    "90": ["fD6Ze2pN8g8", "3MFLxglkeI0", "3jxrjl4B8-U", "2-LAMcpzODU", "4re6CJ0XNF8"],
    "91": ["Xyd_fa5zoEU", "5ER5Of4MOPI", "9_TsNeX2IXo", "MKmrqcoCZ-M", "GWIEON0VSaY"],
    "92": ["AV5PmZJIrrw", "HD7fH653SUw", "TYS5ewGQcYQ", "vsAPBAg0fb0", "3qjoXDTuyOE"],
    "93": ["9_TsNeX2IXo", "JWZkK0ydn-o", "w1kHuo2ZivA", "i4VA1bczfGg", "Pbfj9xXFpm0"],
    "94": ["_O1xunCfYEM", "RGHQsDFzAsc", "4sJACG-H4Fs", "08NbXwvWfwg", "AV5PmZJIrrw"],
    "95": ["-WSon5E798w", "1fbU_MkV7NE", "Y0nIXwjd2BI", "jDwoBqPH0jk", "jWKVamLGeGU"],
    "97": ["Y_7aHqXeCfQ", "5n9TlaoRD58", "SHsUIZiNdeY", "VmB1G1K7v94", "xphvjGDZeYE"],
    "98": ["WpVu2duHnQE"],
    "99": ["SwLekLMjcdk", "Xw8kOEpWodQ", "9o3RfUGNDW8", "7k7H-ULomBE", "Yf8EGYFr22U"],
    "100": ["LfyQBUKR8SE", "NM5lbuq92Aw", "OR6WM5Z2Hqs", "0uvDycOIej0", "XeeCrWhCGVM"],
    "101": ["0xRvl4Qv3ZY", "Vp5STzNfMxI", "mlXPNdw2Sns", "OQkxOqFCFWo", "e8X-HLD2Exw"],
    "102": ["-M4-G8p8fmc", "YMmgqO8Jo-k", "-qsRtp_PbVM", "3UWi44yN-wM", "ktutjpvRu3I"],
    "103": ["xz7sqxaJ-Ck", "JbyjNymZOt0", "Bi-eU19nb6s", "iNfR5cnabZo", "YhiXK53vde0"],
    "104": ["fQ1LJYPRuj8", "qrzqCzHvV68", "KD7uIgi8hCs", "5TCjmc0fTck", "2YSl4JtLcUU"],
    "105": ["ytGaGIn3SjE", "hCDzSR6bW10", "r4MzxtBKyNE", "RyJbvWAh6ec", "hOCg7_taRzg"],
    "106": ["j3Igk5nyZE4", "liG8_rbhUtM", "OrrKhAcb62o", "GG6EjB3ZVf4", "KDEl3AmZbVE"],
    "107": ["K81-SLUFo9c", "3YvfRx31xDE", "Vo27zNDDuw0", "eGo4IYlbE5g"],
    "108": ["GZbfZ033f74", "xQNrFHEMhI4", "7qK7x-d8V2A", "5gMOQKL-SLM", "Sh2bglO1lpg"],
    "109": ["vT2GjY_Umpw", "T3N-TO4reLQ", "kBWAon7ItDw", "QFq5jdwWwX4", "axoeDmW0oAY"],
    "110": ["3gdGSSgDby8", "JkEvP11A5IM", "vzMDGeH5lCY", "Ivy7DATeNQ0", "T3N-TO4reLQ"],
    "111": ["aclHkVaku9U", "mGvzVjuY8SY", "QifjltKUMCk", "otzWCWpuW-A", "bEv6CCg2BC8"],
    "112": ["D7KaRcUTQeE", "qQyCK_rxzN0", "T3W55FZJ1hQ", "bvcY6ZQ1XTY", "kk4c8tJk0oY"],
    "113": ["D7KaRcUTQeE", "xvC10-eCuXs", "YYWhkctnP2o", "vni4lElTvsY", "T3W55FZJ1hQ"],
    "114": ["2sRzh9loTbM", "V3NeByZcSks", "jhdisFm4dfg", "nRqPv7k1pu0", "rN8G0Wp_cqY"],
    "115": ["CHPHn-OnTqE", "GvRgijoJ2xY", "4SJSEMZZs34", "2sRzh9loTbM", "nRqPv7k1pu0"],
    "116": ["azObxVQzGNs", "f23vXjoG2e8", "vKPGe8zb2S4", "9Wak_LJafSU", "y79_KCibOm8"],
    "117": ["ELOCsoDSmrg", "q1cKTmaeQWo", "F488k67BTNo", "mDlOX_TgcHY", "fK0uZ3KRZRI"],
    "118": ["Z053-kKjesQ", "QerRbPE55D8", "_ioqFLNmJv0", "JypGei-rLk8", "ZUhDfCAL6KM"],
    "119": ["QAQ64hK4Xxs", "_RlRDWO2jfg", "2yjwXTZQDDI", "oBGeXxnigsQ", "02W0832OQos"],
    "122": ["Iwe6AmxVf7o", "1SoJVttMI1w", "ETtXO4FW1EU", "H36vL531tZA", "h5WbhIH4OOI"],
    "123": ["qEwKCR5JCog", "B-aVuyhvLHU", "Gu1t7X2yq4M", "V0dYd1jyLpE", "nHboL27_Sn0"],
    "124": ["uXFjLXgIcYc", "3Q9qC7v-h4A", "v6pNfN6FGuU", "a2IrliT3EaQ", "3eOFjmSM9s8"],
    "125": ["xqTh6NqbAtM", "0tzBVqiDwSs", "Zr-PtqcpeWM", "Wp4BlxcFTkE", "JB2oyawG9KI"],
    "126": ["mY0zo3r_soE", "0WxatlSz2C0", "B7Q7gFrqp5w", "8kr91qSn3OM", "tOoZ_rRvrv4"],
    "127": ["Fq67opsS_hc", "nwkLwMRHMQo", "pClUVg1E-TI", "HbAGhP-y0t8", "9WqYx0E4Lbc"],
    "128": ["vx0jZBEmZcE", "mF7FBqUZojs", "ph3pddpKzzw", "X5WPkTCo3AM", "qw1fAjGNFOY"],
    "129": ["NFzTWp2qpiE", "pR1PG69dAO8", "mYf7QhCRYFw", "AsAVbj7puKo", "1W1w4ens3n0"],
    "130": ["4WUN0bAVbRI", "dQ4f8opAANo", "yW2XFE2DbjY", "NtEvkOYzlLM", "yTml8oCUZLs"],
    "138": ["muHgbVgF2Js", "XSy0cRc-yYQ", "iOwrtesXiDw", "1Quc_tOv97I", "z82sY2MczGw"],
    "139": ["3jxrjl4B8-U", "hHS3H1R1aRQ", "IsYLsO16y7g", "4W31U8tTVAg", "T_r1sB7Q4X0"],
    "140": ["y00_rMYk1Oc", "H_Z5BBiJxLY", "KdmioYxFPtE", "aP83vi_2Jhw", "31H5Wf9Yw3I"],
    "141": ["PL_Mj2rOB34", "-uL9jdg1kMw", "_uLNcbBAtJE", "WoOkfQpOlPk", "xj5v9PR_6n0"],
    "142": ["fV78qqekQU4", "X7-y-wgVxOc", "RqJmIMeNm9k", "Feui9n19KPQ", "EEFHHOCfHgw"],
    "143": ["GZbfZ033f74", "J7woEcgtArY", "G1BlS-MHacw", "8uj_mFORqCM", "YKAeU55CkVk"],
    "144": ["GZbfZ033f74", "JW1STSwf644", "AGU-YqIc7aY", "7kmYA6xNyTc", "4Ex0-PRwAtY"],
    "145": ["eozdVDA78K0", "QENKPHhQVi4", "6rr5p1jCZC4", "ul7j4OkNRq4", "S298ziysRdI"],
    "146": ["ilcbmIoz9S4", "IMALXhhHRKM", "eozdVDA78K0", "IvHG341cro0", "2n1C1hP04Ak"],
    "147": ["Fq67opsS_hc", "nwkLwMRHMQo", "l28m_DdSCF0", "jfbDjNgwI2s", "DKXWHEsFCYM"],
    "148": ["3VcKaXpzqRo", "q5sNYB1Q6aM", "WJm9zA2NY8E", "KCMF8w7rs70", "zpUTA5i16kA"],
    "149": ["_w6ztKA4tO8", "FGU9j1P5L-w", "PPrzBWZDOhA", "VOAvDZGHOOI", "W6G8UQjoUFo"],
    "150": ["jTVbilkxSAk", "NAqCVe2mwzM", "0uuA5FeTZcU", "C6sYjDFuq9I", "-0t_hCzUgvM"],
    "151": ["cJRVVxmytaM", "JEnhFC1AtHw", "g6qbq4Lf1FI", "xDt6qbKgLkY", "cYPDveEb1RQ"],
    "152": ["Wqq43dKW1TU", "rJVXF2dw9FQ", "3R14MnZbcpw", "l-Z7z0nA-Rs", "Duec1jUWBVQ"],
    "154": ["6y_GEg3YFC0", "q1cKTmaeQWo", "1Tq3QdYUuHs", "NlZeAGZ_YJw", "ZHlBSI6JPsA"],
    "155": ["ksy-cG4pE88", "Yx0wUWCzkN4", "w90fazIzUeU", "dl2BHTJEPbc", "MpRpuaBCgNk"]
}

var exerciseIds = [];
var exerciseNames = [];
var exerciseDescriptions = [];

var exerciseNameOnPage = document.getElementById('exercise-name');
var exerciseDescriptionOnPage = document.getElementById('exercise-desc');
var exerciseVideoOnPage = document.getElementById('youtubeVideo');
var rightArrowOnPage = document.getElementById('exercise-right');
var leftArrowOnPage = document.getElementById('exercise-left');
var tModal = document.getElementById("tModal1");
var btn = document.getElementById("tBtn1");
var span = document.getElementsByClassName("close1")[0];
var tutorialVideoButton = document.getElementById('tBtn1');

var currentIndex = 0;

var userWorkoutPlan = {};

var noWorkout = false;

let queryExercises = async () => {
    let apiHeaders = new Headers();

    apiHeaders.append('Content-Type', 'application/json');

    let apiRequest = {
        method: 'GET',
        headers: apiHeaders,
        redirect: 'follow'
    };

    for (let i = 0; i < userWorkoutPlan.exercises.length; i++) {
        let exerciseId = userWorkoutPlan.exercises[i];
        await fetch(`https://wger.de/api/v2/exercise/${exerciseId}/`, apiRequest)
            .then(apiResponse => apiResponse.text())
            .then(apiResult => {
                exercise = JSON.parse(apiResult);
                exerciseIds.push(exercise.id);
                exerciseNames.push(exercise.name);
                exerciseDescriptions.push(exercise.description);
            })
            .catch(error => console.log(error));
    }
}

let populateExerciseInfo = async () => {
    await populateUserWorkout();
    await queryExercises();

    let uniqueVideoId = null;

    if (exerciseNames.length === 0) {
        exerciseNameOnPage.innerHTML = 'You haven\'t added any exercises to your workout plan yet!';
        exerciseDescriptionOnPage.innerHTML = 'Please visit the <a href="nav/exercise/index.html">Exercise page</a> to add exercises to your plan.';
        tutorialVideoButton.style.display = 'none';
        noWorkout = true;
    }
    else {
        exerciseNameOnPage.innerHTML = exerciseNames[currentIndex];
        exerciseDescriptionOnPage.innerHTML = exerciseDescriptions[currentIndex];
        uniqueVideoIds = exerciseVideos[exerciseIds[0]];
        exerciseVideoOnPage.src = 'https://www.youtube.com/embed/' + uniqueVideoIds[0];
    }
}

let populateUserWorkout = async () => {
    let apiHeaders = new Headers();
    let apiBody = null;
    let cookies = document.cookie;
    let username = cookies.split('; ').find(element => element.startsWith('username')).split('=')[1];
    apiHeaders.append('Content-Type', 'application/json');
    apiBody = JSON.stringify({ "username": username, "getWorkout": true });

    let apiRequest = {
        method: 'POST',
        headers: apiHeaders,
        body: apiBody,
        redirect: 'follow'
    };

    await fetch('https://n8nj1139da.execute-api.us-east-2.amazonaws.com/prod/query-user-info', apiRequest)
        .then(apiResponse => apiResponse.text())
        .then(apiResult => {
            let statusCode = JSON.parse(apiResult).statusCode;
            if (statusCode == 200) {
                let responseBody = JSON.parse(apiResult).body;
                userWorkoutPlan = JSON.parse(responseBody.workoutPlan);
            }
        })
        .catch(error => console.log(error));
}

rightArrowOnPage.addEventListener('click', function () {
    if (noWorkout) {
        return;
    }
    else {
        currentIndex = (currentIndex + 1) % exerciseNames.length;
        document.getElementById("exercise-name").innerHTML = exerciseNames[currentIndex];
        document.getElementById("exercise-desc").innerHTML = exerciseDescriptions[currentIndex];
        uniqueVideoIds = exerciseVideos[exerciseIds[currentIndex]];
        exerciseVideoOnPage.src = 'https://www.youtube.com/embed/' + uniqueVideoIds[0];
    }
});

leftArrowOnPage.addEventListener('click', function () {
    if (noWorkout) {
        return;
    }
    else {


        if (currentIndex == 0)
            currentIndex = exerciseNames.length - 1;
        else
            currentIndex--;
        document.getElementById("exercise-name").innerHTML = exerciseNames[currentIndex];
        document.getElementById("exercise-desc").innerHTML = exerciseDescriptions[currentIndex];
        uniqueVideoIds = exerciseVideos[exerciseIds[currentIndex]];
        exerciseVideoOnPage.src = 'https://www.youtube.com/embed/' + uniqueVideoIds[0];
    }
});

window.addEventListener('load', populateExerciseInfo);

btn.onclick = function () {
    tModal1.style.display = "block";
}

span.onclick = function () {
    tModal1.style.display = "none";
    uniqueVideoIds = exerciseVideos[exerciseIds[currentIndex]];
    exerciseVideoOnPage.src = 'https://www.youtube.com/embed/' + uniqueVideoIds[0];
}

window.onclick = function (event) {
    if (event.target == tModal1) {
        tModal1.style.display = "none";
    }
}