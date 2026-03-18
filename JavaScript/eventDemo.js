 function form1()
 {
    document.getElementById('r1').innerHTML='Name:<input type="text" id="name"> Email:<input type="text" id="email"> Mobile:<input type="text" id="mob"><br><br>Product:<input type="text" id="product">prize:<input type="text" id="prize" onchange=getValue()> Quantity:<input type="text" id="qty" onchange="getValue();"><br><br>GST(18%):<input type="text" id="gst" value="18" disabled>Tax(5%):<input type="text" id="tax" value="5" disabled> Total:<input type="text" id="total" disabled><br><br>'
 }

 function getValue()
 {
   //alert('calling success...!');
   prize=parseInt(document.getElementById('prize').value);
   qty=parseInt(document.getElementById('qty').value);
   gst= parseInt(document.getElementById('gst').value);
   tax= parseInt(document.getElementById('tax').value);
   if(prize && qty){
      Ans=prize*qty;
      Total=Ans+gst+tax;
   }
     
   //alert(Ans);
   document.getElementById('total').value=Total;
 }