
function detectFee() {

    let amount = Number(document.getElementById("amount").value);
    let processing = Number(document.getElementById("processing").value);
    let convenience = Number(document.getElementById("convenience").value);
    let service = Number(document.getElementById("service").value);
    let gst = Number(document.getElementById("gst").value);

    let values = [processing, convenience, service, gst];

    if (document.getElementById("amount").value === "" ||
        amount <= 0 ||
        values.some(v => !Number.isFinite(v) || v < 0)) {

        alert("Please enter valid amounts!");
        return;
    }

    let extra = processing + convenience + service + gst;
    let total = amount + extra;
    let percentage = (extra / amount) * 100;

    document.getElementById("extra").innerText =
        "Extra Fees: ₹" + extra.toFixed(2);

    document.getElementById("total").innerText =
        "Total Amount: ₹" + total.toFixed(2);

    let warning = document.getElementById("warning");

    if (percentage > 5) {
        warning.innerText =
            "⚠ High Extra Charges: " + percentage.toFixed(2) + "%";
    } else {
        warning.innerText =
            "✓ Charges are within the demo threshold: " +
            percentage.toFixed(2) + "%";
    }
}




