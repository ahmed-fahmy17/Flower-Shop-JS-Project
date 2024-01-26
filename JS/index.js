window.addEventListener("load", function () {
  function loadData() {
    let FlowersDate;
    let SellerData;
    let UserData;
    let RequestSeller;
    let ChartOrder;

    fetch("../Data.json")
      .then((response) => response.json())
      .then((data) => {
        FlowersDate = data.flowers;
        SellerData = data.sellers;
        UserData = data.users;
        RequestSeller = data.request_seller;
        ChartOrder = data.CartOrders;

        localStorage.setItem("flowersData", JSON.stringify(FlowersDate));
        localStorage.setItem("sellerData", JSON.stringify(SellerData));
        localStorage.setItem("userData", JSON.stringify(UserData));
        localStorage.setItem("requestseller", JSON.stringify(RequestSeller));
        localStorage.setItem("ChartOrder", JSON.stringify(ChartOrder));

        let search_icon = this.document.querySelector(".search");
        console.log(search_icon);
        search_icon.addEventListener("click", function (e) {
          let search_input = document.querySelector(".search_input");
          search_input.classList.remove("none");
          search_input.classList.add("applaySearchStyle");
        });
      })
      .catch((error) => console.error("Error fetching products:", error));
  }
  if (localStorage.length === 0) {
    loadData();
  }

  // Get user information from sessionStorage
  let loggedInUser = JSON.parse(sessionStorage.getItem("loggedInUser")) || [];
  let nav = document.getElementsByClassName("user")[0];

  if (nav) {
    if (localStorage.length == 0) {
      loadData();
    }

    let CheckLogedUser =
      JSON.parse(sessionStorage.getItem("loggedInUser")) || [];

    if (CheckLogedUser.length != 0 && CheckLogedUser.role == "user") {
      nav.innerHTML = `
        <a href="../HTML Pages/user.html"><i class="fa-solid fa-user mr-5" style="color: #3498db; font-size: 20px;"></i></a>
        <a href="#"><i class="fa fa-shopping-cart mr-5" style="color: #2ecc71; font-size: 20px;"></i></a>
        <a href="#" class="log"><i class="fa fa-sign-out" style="color: #e74c3c; font-size: 20px;"></i></a>`;

      let logoutLink = document.querySelector(".log");
      if (logoutLink) {
        logoutLink.addEventListener("click", function () {
          sessionStorage.removeItem("loggedInUser");
          window.location.href = "../index.html";
        });
      }
    } else {
      nav.innerHTML = `
        <a href="../HTML Pages/signup.html" class="btn btn-primary mr-2">Sign up</a>
        <a href="../HTML Pages/login.html" class="btn btn-secondary">Login</a>`;
    }

    //amira section
    //let search_icon = this.document.querySelector(".search");
    //console.log(search_icon);
    //search_icon.addEventListener('click', function (e) {
    //let search_input = document.querySelector(".search_input");
    //search_input.classList.remove("none");
    //search_input.classList.add("applaySearchStyle");
    //})
  }
});
