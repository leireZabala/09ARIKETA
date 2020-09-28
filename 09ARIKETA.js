
function zenbakiakAtera2() {
    contador = 0;
    document.write("<table border='2'>");
    document.write("<tr>");
    for (i = 2; i <= 100; i = i + 2)
    {
        document.write("<td>" + i + "</td>");
        contador = contador + 1;
        if (contador == 5)
        {
            document.write("</tr>");
            document.write("<tr>");
            contador = 0;
        }
    }

    document.write("</tr>");
    document.write("</table>");
}
























function zenbakiakAtera() {
    contador = 0;
    var etiquetas = "<table border='2'>";
    etiquetas = etiquetas + "<tr>";
    for (i = 2; i <= 100; i = i + 2)
    {
        etiquetas = etiquetas + "<td>" + i + "</td>";
        contador = contador + 1;
        if (contador == 5)
        {
            etiquetas = etiquetas + "</tr>";
            etiquetas = etiquetas + "<tr>";
            contador = 0;
        }
    }
    etiquetas = etiquetas + "</tr>";
    etiquetas = etiquetas + "</table>";
    document.getElementById("hemenJarri").innerHTML = etiquetas;
}    