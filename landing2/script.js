function confirmSend(f)
        { 
            if(confirm('Вы уверены?'))
            {
                f.submit();
                var xhr = new XMLHttpRequest();

                var body = 'name=' + encodeURIComponent(f.name) +
                '&email=' + encodeURIComponent(f.email)+
                '&message=' + encodeURIComponent(f.message);

                xhr.open("POST", '/submit', true);
                xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

                xhr.send(body);
            }
        }  