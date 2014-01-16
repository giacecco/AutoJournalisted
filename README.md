# AutoJournalisted

## Summary
AutoJournalisted automatically and unattendedly sends all articles published by your favourite UK journalists (if not behind paywalls) straight to your [Instapaper](http://www.instapaper.com/) account. Moreover, if Instapaper is configured to forward all articles to your Kindle, you will be able to read the same on your e-reader! 

This is possible thanks to the guys at the [Media Standard Trust](http://mediastandardstrust.org/) whose service [Journalisted](http://journalisted.com/) monitors the journalists' activity and publishes references to their work through nice [APIs](http://journalisted.com/api). By the way, why don't you [thank them](http://www.justgiving.com/mediastandardstrust)?

Journalisted currently covers 21 UK news outlets across 14 different websites (list downloaded from the Journalisted website on 16/1/2014):
- BBC News Online
- Financial Times
- Express.co.uk - Daily Express and Sunday Express
- Mail Online - Daily Mail and Mail on Sunday
- Telegraph.co.uk - Daily Telegraph and Sunday Telegraph
- Guardian.co.uk - The Guardian and The Observer
- The Herald
- Independent.co.uk - The Independent and The Independent on Sunday
- Mirror.co.uk - Daily Mirror and Sunday Mirror
- The Scotsman
- Scotland on Sunday
- The Sun
- Times Online - The Times and The Sunday Times
- News of the World

Please note that I am not associated to the Media Standard Trust and this source code is provided "as is", without warranty of any kind.

## Installation
AutoJournalisted is designed to run unattended within a dedicated Google Drive spreadsheet. This means that you don't need a laptop or a "server" to run AutoJournalisted on: Google will host it for you for free!

To run your own AutoJournalisted, clone [this spreadsheet](https://docs.google.com/spreadsheet/ccc?key=0Ani-XvikxKzAdHJYbWJoODdrSUNudnRTSUhfOElkTkE&usp=sharing) to your Google Drive account by opening it and choosing the *File | Make a copy...* option from the menu.

![](https://raw.github.com/giacecco/AutoJournalisted/master/images/instructions1.png)

Chose a name you like...

![](https://raw.github.com/giacecco/AutoJournalisted/master/images/instructions2.png)

Then go to *Tools | Script editor...*. It will open a new window / tab in your browser showing some JavaScript code, but don't get scared.

![](https://raw.github.com/giacecco/AutoJournalisted/master/images/instructions3.png)

Go to *File | Project properties*.

![](https://raw.github.com/giacecco/AutoJournalisted/master/images/instructions4.png)

Choose the "User properties" tab at the top and insert your Instapaper username and password as shown.

![](https://raw.github.com/giacecco/AutoJournalisted/master/images/instructions5.png)

Then, open the "main.gs" script file from the tabs on the left and choose your favourite journalists' "reference names", or "refs". These are unique names Journalisted assign them to avoid ambiguity. You can see in the example that the same journalist may have more than one ref.

![](https://raw.github.com/giacecco/AutoJournalisted/master/images/instructions6.png)

If you don't know the refs of your favourite journalist, go to [http://journalisted.com/](http://journalisted.com/) and write the name in the search box at the top right, e.g. Emma Graham-Harrison:

![](https://raw.github.com/giacecco/AutoJournalisted/master/images/instructions7.png)

Hover the mouse over the Emma you are actually interested in and observe what the URL behind it is. If your browser is Chrome, you will likely be able to see it at the bottom of the window, as in the picture below.

![](https://raw.github.com/giacecco/AutoJournalisted/master/images/instructions8.png)

Add the ref to the list of journalists:

![](https://raw.github.com/giacecco/AutoJournalisted/master/images/instructions9.png)

Now, choose "Test" from the drop down menu and click on the "play" icon in the toolbar, as shown in the picture below. This is required only once, as it will give you the opportunity to tell Google that it is ok for the scripts to manage data and access external services (Journalisted's APIs). 

![](https://raw.github.com/giacecco/AutoJournalisted/master/images/instructions10.png)

![](https://raw.github.com/giacecco/AutoJournalisted/master/images/instructions11.png)

![](https://raw.github.com/giacecco/AutoJournalisted/master/images/instructions12.png)

Now, after a few seconds you will see that the first few articles have already been added to Instapaper!

![](https://raw.github.com/giacecco/AutoJournalisted/master/images/instructions13.png)

Finally, you want AutoJournalisted to run automatically and unattended. Go back to the window with the Script Editor and click on the "triggers" icon, that is the one just left to the "play" icon, the one that looks like a clock.

![](https://raw.github.com/giacecco/AutoJournalisted/master/images/instructions14.png)

You will create two triggers. A typical configuration is the one shown below. 
- The first trigger goes off every 30 minutes and fetches the latest articles for one journalists. The next time it runs, the next journalist will be fetched, and so on. 
- The second trigger is set to go off once a day, whatever the most suitable time to transfer the data to Instapaper is. Once a day before you wake up is quite convenient, as you will be able to read the new articles over breakfast :-)

![](https://raw.github.com/giacecco/AutoJournalisted/master/images/instructions15.png)

If you use Instapaper to send the articles to your Kindle, remember to make that happen *after* AutoJournalisted finished his part!

![](https://raw.github.com/giacecco/AutoJournalisted/master/images/instructions16.png)

That's all! Happy reading!

## Licence

![Creative Commons License](http://i.creativecommons.org/l/by/4.0/88x31.png "Creative Commons License") This work is licensed under a [Creative Commons Attribution 4.0 International License](http://creativecommons.org/licenses/by/4.0/).