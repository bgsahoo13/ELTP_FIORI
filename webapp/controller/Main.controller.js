sap.ui.define(
    ["sap/ui/core/mvc/Controller", "sap/ui/model/json/JSONModel","sap/m/MessageToast","sap/m/MessageBox"],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel,MessageToast,MessageBox) {
      "use strict";
  
      return Controller.extend("eltp.fiori.eltpfiori.controller.Main", {
        onInit: function () {
          debugger;
          var oEmployeeDate = {
              empData:{
              EmpId: "",
              Name: "", 
              Email: "",
              MobileNumber: "",
              DOB: "",
              Gender: 1,
              AddressLine1: "",
              city: "",
              Landmark: "",
              Postalcode: "",
              },
            valueState: {
              EmpId: "None",
              Name: "None",
              Email: "None",
              MobileNumber: "None",
              DOB: "None",
              Gender: "None",
              AddressLine1: "None",
              city: "None",
              Landmark: "None",
              Postalcode: "None",
            },
            valueStateText: {
              EmpId: "",
              Name: "",
              Email: "",
              MobileNumber: "",
              DOB: "",
              Gender: "",
              AddressLine1: "",
              city: "",
              Landmark: "",
              Postalcode: "",
            },
            AllEmployees: [
              {
                EmpId: "814879",
                Name: "Bhabagrahi",
                Email: "bgsahoo13@gmail.com", 
                MobileNumber: "9868893e90",
                DOB: "20/09/1998",
                Gender: 1,
                AddressLine1: "Marathali",
                city: "bangalore",
                Landmark: "KLM ",
                Postalcode: "560038",
              },
              {
                EmpId: "814880",
                Name: "Seetal",
                Email: "seet4@gmail.com",
                MobileNumber: "768907654",
                DOB: " 12/07/1999", 
                Gender: 1,
                AddressLine1: "krshnapalita",
                city: "Banglore ",
                Landmark: "oar",
                Postalcode: "567789",
              },
              {
                  EmpId: "814879",
                  Name: "Ravish",
                  Email: "ravi45@gmail.com",
                  MobileNumber: "8968565234",
                  DOB: " 18/06/1988",
                  Gender: 1,
                  AddressLine1: "pune",
                  city: "pune ",
                  Landmark: "dypatil",
                  Postalcode: "6785432",
                },
            ],
          };
          var oModel = new JSONModel(oEmployeeDate);
          this.getView().setModel(oModel, "mEmployee");
        },
        onAfterRendering: function () {},
        onBeforeRendering: function () {},
        onExit: function () {},
  
  
        onClickSubmit: function () {
          debugger;
          var that = this;
          var oModel = that.getView().getModel("mEmployee");
          var oEmpData = oModel.getProperty("/empData");
          var aAllEmpData = oModel.getProperty("/AllEmployees");
            var bFlag= false;
            for(var i=0;i < aAllEmpData.length;i++){
                if(aAllEmpData[i].EmpId === oEmpData.EmpId){
                    bFlag=true;
                   break;
                }
            }
            if(bFlag){
              oModel.setProperty("/valueState/EmpId","Error");
              oModel.setProperty("/valueStateText/EmpId","Employee id is already exists");
              MessageToast.show("Invalid id employee Id,Because it is already Exists...");
              return;
            }else{
              oModel.setProperty("/valueState/EmpId","None");
              oModel.setProperty("/valueStateText/EmpId","");
            }
            if(oEmpData.EmpId && oEmpData.Name && oEmpData.Email && oEmpData.MobileNumber && oEmpData.DOB && oEmpData.Gender >= 0 && oEmpData.AddressLine1 && oEmpData.city && oEmpData.Landmark && oEmpData.Postalcode){
                aAllEmpData.push(oEmpData);
                console.log(JSON.stringify(aAllEmpData));
                oModel.setProperty("/AllEmployees",aAllEmpData);
                oModel.setProperty("/empData",{
                  EmpId: "",
                  Name: "", 
                  Email: "",
                  MobileNumber: "",
                  DOB: "",
                  Gender: -1,
                  AddressLine1: "",
                  city: "",
                  Landmark: "",
                  Postalcode: "",
                });             
             }else{
                 if(!oEmpData.EmpId){
                  oModel.setProperty("/valueState/EmpId","Error");
                  oModel.setProperty("/valueStateText/EmpId","Please provide Employee ID"); 
                 }
                 if(!oEmpData.Name){
                  oModel.setProperty("/valueState/Name","Error");
                  oModel.setProperty("/valueStateText/Name","Please provide Employee Name"); 
                 }
                 if(!oEmpData.Email){
                  oModel.setProperty("/valueState/Email","Error");
                  oModel.setProperty("/valueStateText/Email","Please provide Employee Email"); 
                 }
                 if(!oEmpData.MobileNumber){
                  oModel.setProperty("/valueState/MobileNumber","Error");
                  oModel.setProperty("/valueStateText/MobileNumber","Please provide Employee MobileNumber"); 
                 }
                 if(!oEmpData.DOB){
                  oModel.setProperty("/valueState/DOB","Error");
                  oModel.setProperty("/valueStateText/DOB","Please provide Employee DOB"); 
                 }
                 if(oEmpData.Gender === -1){
                  oModel.setProperty("/valueState/Gender","Error");
                  oModel.setProperty("/valueStateText/Gender","Please provide Employee Gender"); 
                 }
                 if(!oEmpData.AddressLine1){
                  oModel.setProperty("/valueState/AddressLine1","Error");
                  oModel.setProperty("/valueStateText/AddressLine1","Please provide Employee AddressLine1"); 
                 }
                 if(!oEmpData.city){
                  oModel.setProperty("/valueState/city","Error");
                  oModel.setProperty("/valueStateText/city","Please provide Employee city"); 
                 }
                 if(!oEmpData.Landmark){
                  oModel.setProperty("/valueState/Landmark","Error");
                  oModel.setProperty("/valueStateText/Landmark","Please provide Employee Landmark"); 
                 }
                 if(!oEmpData.Postalcode){
                  oModel.setProperty("/valueState/Postalcode","Error");
                  oModel.setProperty("/valueStateText/Postalcode","Please provide Employee Postalcode"); 
                 }
                 MessageToast.show("Please fill all mandatory fields..!");
             }
             return;
             aAllEmpData.push(oEmpData);
           oModel.setProperty("/AllEmployees",aAllEmpData);
              oModel.setProperty("/empData",{
                EmpId: "",
                Name: "", 
                Email: "",
                MobileNumber: "",
                DOB: "",
                Gender: -1,
                AddressLine1: "",
                city: "",
                Landmark: "",
                Postalcode: "",
              });     
      },
      onSelectGender: function(oEvent){
          var iIndex=oEvent.getSource().getSelectedIndex();
          if(iIndex >=0){
              oEvent.getSource.getValueState("None");
          }else{
            oEvent.getSource.getValueState("Error");
          }
      },
      fnReturnAge : function(dob){
          var sCurrentYear = new Date().getFullYear();
          var yearofbirth = new Date(dob).getFullYear();
          return sCurrentYear - yearofbirth; // 2022-1998
      },
      fnValidateEmail : function(sEmail){
        var regEx = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9-])+.([a-z]+)(.[a-z]+)?$/;
        if (regEx.test(sEmail)) {
           return 1;
        } else {
            return 0;
        }

      },
      onClickdelete: function(oEvent){
          debugger;
          var that=this;
          var sPath=oEvent.getSource().getBindingContext("mEmployee").getPath();
          var oModel=that.getView().getModel("mEmployee");

          var aAllEmplyees=oModel.getProperty("/AllEmployees");

          var sIndex=sPath.split("/")[2];

          MessageBox.confirm(
              "Are you sure,you want to delete the employee record...!",
          {
              action: [sap.m.MessageBox.Action.DELETE,sap.m.MessageBox.Action.CANCEL],
              emphasizedAction: sap.m.MessageBox.Action.DELETE,
              onClose: function(sAction){
                  if(sAction==="OK"){
                aAllEmplyees.splice(sIndex,1);
                oModel.setProperty("/AllEmployees",aAllEmplyees);
              }
            }
          });
        },
        onClickEdit: function(oEvent){
            debugger;
          var that=this;
          var sPath=oEvent.getSource().getBindingContext("mEmployee").getPath();
          var oModel=that.getView().getModel("mEmployee");
          var oSelectedData=oModel.getProperty(sPath);
          oModel.setProperty("/EmpDetailSet",JSON.parse(JSON.stringify(oSelectedData)));
          oModel.setProperty("/Selectedpath",sPath);
          if(!that._oDialogEmployeeDetails){
            that._oDialogEmployeeDetails=sap.ui.xmlfragment(
                "idDialogEmpDetails",
                "eltp.fiori.eltpfiori.fragments.EmployeeDetails",
                that
            );
          }
            that.getView().addDependent(that._oDialogEmployeeDetails);               
            that._oDialogEmployeeDetails.open();
          },
          onCloseDialog: function(){
               var that=this;
               if(that._oDialogEmployeeDetails){
                that.getView().removeDependent(that._oDialogEmployeeDetails);               
                that._oDialogEmployeeDetails.close();    
               }
            },
            onSaveEmpDetails: function(){           
                var that=this;           
                var oModel=that.getView().getModel("mEmployee");           
                var sPath=oModel.getProperty("/Selectedpath");

                var oDialogDetails=oModel.getProperty("/EmpDetailSet"); 

                if(oDialogDetails.EmpId && oDialogDetails.Name && oDialogDetails.Email && oDialogDetails.MobileNumber && oDialogDetails.DOB && oDialogDetails.Gender >= 0 && oDialogDetails.AddressLine1 && oDialogDetails.city && oDialogDetails.Landmark && oDialogDetails.Postalcode){
                     oModel.setProperty(sPath,oDialogDetails);
                     that.onCloseDialog();
                }else{
                    if(!oDialogDetails.EmpId){
                        oModel.setProperty("/valueState/EmpId","Error");
                        oModel.setProperty("/valueStateText/EmpId","Please provide Employee ID"); 
                       }
                       if(!oDialogDetails.Name){
                        oModel.setProperty("/valueState/Name","Error");
                        oModel.setProperty("/valueStateText/Name","Please provide Employee Name"); 
                       }
                       if(!oDialogDetails.Email){
                        oModel.setProperty("/valueState/Email","Error");
                        oModel.setProperty("/valueStateText/Email","Please provide Employee Email"); 
                       }
                       if(!oDialogDetails.MobileNumber){
                        oModel.setProperty("/valueState/MobileNumber","Error");
                        oModel.setProperty("/valueStateText/MobileNumber","Please provide Employee MobileNumber"); 
                       }
                       if(!oDialogDetails.DOB){
                        oModel.setProperty("/valueState/DOB","Error");
                        oModel.setProperty("/valueStateText/DOB","Please provide Employee DOB"); 
                       }
                       if(oDialogDetails.Gender === -1){
                        oModel.setProperty("/valueState/Gender","Error");
                        oModel.setProperty("/valueStateText/Gender","Please provide Employee Gender"); 
                       }
                       if(!oDialogDetails.AddressLine1){
                        oModel.setProperty("/valueState/AddressLine1","Error");
                        oModel.setProperty("/valueStateText/AddressLine1","Please provide Employee AddressLine1"); 
                       }
                       if(!oDialogDetails.city){
                        oModel.setProperty("/valueState/city","Error");
                        oModel.setProperty("/valueStateText/city","Please provide Employee city"); 
                       }
                       if(!oDialogDetails.Landmark){
                        oModel.setProperty("/valueState/Landmark","Error");
                        oModel.setProperty("/valueStateText/Landmark","Please provide Employee Landmark"); 
                       }
                       if(!oDialogDetails.Postalcode){
                        oModel.setProperty("/valueState/Postalcode","Error");
                        oModel.setProperty("/valueStateText/Postalcode","Please provide Employee Postalcode"); 
                       }
                       MessageToast.show("Plese fill all mandatory fields..!");
                    }

                }
    });
  }
);

             