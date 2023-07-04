function clickFunction() {
  document.getElementById("body").style.backgroundColor = "red";
}

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  document.getElementById("body").style.backgroundColor = color;
  document.getElementById("bg").innerHTML = "Background color: " + color;
}

const copyContent = async () => {
  let text = document.getElementById("bg").innerHTML;

  try {
    await navigator.clipboard.writeText(text.substring(18));
  } catch (err) {
    console.error("Failed to copy: ", err);
  }

  Swal.fire({
    position: "center",
    icon: "success",
    title: "Your color has been copied!",
    showConfirmButton: false,
    timer: 2500,
  });
};
