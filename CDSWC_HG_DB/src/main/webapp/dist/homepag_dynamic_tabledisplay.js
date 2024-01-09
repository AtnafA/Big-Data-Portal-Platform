var li_elements1 = document.querySelectorAll(".dy_change a");
        var item_elements1 = document.querySelectorAll(".item_li");
        for (var i = 0; i < li_elements1.length; i++) {
          li_elements1[i].addEventListener("click", function() {
            li_elements1.forEach(function(li) {
              li.classList.remove("active_li");
            });
            this.classList.add("active_li");
            var li_value = this.getAttribute("data-li");
            item_elements1.forEach(function(item) {
              item.style.display = "none";
            });
            if (li_value == "spa_") {
                document.querySelector("." + li_value).style.display = "block";
              }
            else if (li_value == "spa_data") {
              document.querySelector("." + li_value).style.display = "block";
            } else if (li_value == "corpo_data") {
              document.querySelector("." + li_value).style.display = "block";
            }else if (li_value == "grant_proj") {
              document.querySelector("." + li_value).style.display = "block";
            }
            else if (li_value == "geo_tech") {
              document.querySelector("." + li_value).style.display = "block";
            } 
            else if (li_value == "pro_report") {
                document.querySelector("." + li_value).style.display = "block";
              } 
            else if (li_value == "return_error") {
                document.querySelector("." + li_value).style.display = "block";
              }
            else if (li_value == "return_result") {
                document.querySelector("." + li_value).style.display = "block";
              }
            else {
              console.log("");
            }
          });
        }
        
        