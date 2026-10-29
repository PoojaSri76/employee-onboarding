sap.ui.define(["sap/ui/model/Filter", "sap/ui/model/FilterOperator"], function (Filter, FilterOperator) {
    "use strict";
    return {
        filterItems: function (sValue) {
            console.log(sValue)
            var dToday = new Date();
            dToday.setHours(0, 0, 0, 0);

            function getYearsAgo(iYears) {
                var dDate = new Date(dToday);

                dDate.setFullYear(dDate.getFullYear() - iYears);

                return [
                    dDate.getFullYear(),
                    String(dDate.getMonth() + 1).padStart(2, "0"),
                    String(dDate.getDate()).padStart(2, "0")
                ].join("-");
            }

            var sOneYearAgo = getYearsAgo(1);
            var sThreeYearsAgo = getYearsAgo(3);

            switch (sValue) {
                case "NEW":
                    
                    const ofilter = new Filter({ path: "purchaseDate", operator: FilterOperator.GT, value1: sOneYearAgo });
                    console.log("filter object:",ofilter);
                    
                    return ofilter
                    case "MID":
                    return new Filter({
                        filters: [
                            new Filter({ path: "purchaseDate", operator: FilterOperator.GE, value1: sThreeYearsAgo }),
                            new Filter({ path: "purchaseDate", operator: FilterOperator.LE, value1: sOneYearAgo })
                        ],
                        and: true
                    });
                case "OLD":
                    return new Filter({ path: "purchaseDate", operator: FilterOperator.LT, value1: sThreeYearsAgo });
                case "ALL":
                default:
                    return new Filter({ path: "purchaseDate", operator: FilterOperator.NE, value1: null });
            }
        }
    };
});
