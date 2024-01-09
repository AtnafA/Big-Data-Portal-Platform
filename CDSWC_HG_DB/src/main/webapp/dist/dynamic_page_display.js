/**
 * //control list dynamically
 */
var li_elements = document.querySelectorAll(".lis_change a");
var item_elements = document.querySelectorAll(".item_li");
for (var i = 0; i < li_elements.length; i++) {
  li_elements[i].addEventListener("click", function() {
    li_elements.forEach(function(li) {
      li.classList.remove("active_l");
    });
    this.classList.add("active_l");
    var li_value = this.getAttribute("data-li");
    item_elements.forEach(function(item) {
      item.style.display = "none";
    });
    if (li_value == "S_con") {
      document.querySelector("." + li_value).style.display = "block";
    } else if (li_value == "Ps_con") {
      document.querySelector("." + li_value).style.display = "block";
    } else if (li_value == "Ns_con") {
      document.querySelector("." + li_value).style.display = "block";
    } else if (li_value == "NPs_con") {
      document.querySelector("." + li_value).style.display = "block";
    } else if (li_value == "Otb_con") {
      document.querySelector("." + li_value).style.display = "block";
    }
    else if (li_value == "Otn_gg") {
        document.querySelector("." + li_value).style.display = "block";
      }
    else if (li_value == "Otn_we") {
        document.querySelector("." + li_value).style.display = "block";
      } else if (li_value == "Otn_td") {
        document.querySelector("." + li_value).style.display = "block";
      } else if (li_value == "Otn_bu") {
        document.querySelector("." + li_value).style.display = "block";
      } else if (li_value == "Otn_rl") {
        document.querySelector("." + li_value).style.display = "block";
      }
      else if (li_value == "Otn_sg") {
          document.querySelector("." + li_value).style.display = "block";
        }
      else if (li_value == "Otn_skey") {
          document.querySelector("." + li_value).style.display = "block";
        }
      else if (li_value == "All_rowData") {
          document.querySelector("." + li_value).style.display = "block";
        }
      else if (li_value == "Acc_wr") {
          document.querySelector("." + li_value).style.display = "block";
        }
    else {
      console.log("");
    }
  });
}  
