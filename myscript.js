/*source: https://www.htmlgoodies.com/html5/creating-an-expandable-list-of-items-in-html-with-javascript/ -->*/


var allSpan = document.getElementsByTagName('span');

for(var x = 0; x < allSpan.length; x++)
{
    allSpan[x].onclick=function()
    {
        if(this.parentNode)
        {
            var childList = this.parentNode.getElementsByTagName('LI');
            for(var y = 0; y< childList.length;y++)
            {
                var currentState = childList[y].style.display;
                if(currentState=="none")
                {
                    childList[y].style.display="block";
                }
                else
                {
                    childList[y].style.display="none";
                }
            }
        }
    }
}
