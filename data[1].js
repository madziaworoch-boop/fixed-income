/* ============================================================
   Fixed Income flashcards — data
   Extracted verbatim from the original HTML (content unchanged).
   GLOSS: [term, definition]  (63 terms)
   CARDS: [day, question, fullAnswerHTML, keywords[], simpleExplanation, examAnswer]  (110 cards)
   ============================================================ */

// Yellow "Slide errors to ignore" box, shown on the start screen.
const SLIDE_ERRORS = `<b>Slide errors to ignore:</b> Day 3 slide 15 labels the CDS buyer "long credit" – the buyer is SHORT credit. Day 3 slide 54 swaps the CLO/CDO headers. Day 4 slide 13 swaps the solvency/liquidity headers; slide 29 swaps SOFR/Fed Funds. Day 1 slides 18, 48, 57, 60, 67 and Day 2 slides 3 and 10 swap column headers. Go by the content.`;

const GLOSS = [["Bond", "A loan cut into pieces and sold to many investors. The issuer pays interest (coupons) and pays back the face value (usually 100) at the end."], ["Coupon (kupon)", "The yearly interest a bond pays, e.g. 5% of 100 = 5 per year."], ["Face value / par (wartość nominalna)", "The amount paid back at the end, usually 100."], ["Maturity (termin wykupu)", "The date the bond ends and the face value is paid back."], ["Issuer (emitent)", "Whoever borrows by selling the bond: a government or a company."], ["Yield (rentowność)", "The return you earn on a bond, in % per year."], ["YTM – yield to maturity", "The one average yearly return you earn if you buy at today's price and hold to the end."], ["Spot rate", "The interest rate for one single payment at one specific date (e.g. the 3-year spot rate)."], ["Forward rate", "A future interest rate (e.g. from year 3 to year 4) calculated from today's spot rates."], ["Yield curve (krzywa dochodowości)", "Chart of interest rates for different lengths of time: 1y, 2y, 5y, 10y…"], ["Discounting (dyskontowanie)", "Converting future money into today's value: divide by (1 + r)^t."], ["Present value – PV (wartość bieżąca)", "What future money is worth today."], ["Basis point – bp (punkt bazowy)", "0.01%. 100bp = 1%."], ["Duration", "How sensitive a bond's price is to rates. Modified duration 4 → rates +1% → price ≈ −4%."], ["DV01", "How many $ a bond's price changes when rates move by 1bp (0.01%)."], ["Convexity (wypukłość)", "The bend in the price–rate curve. Positive = gain more when rates fall, lose less when they rise."], ["Credit spread", "Extra interest a company pays above the government rate, because it might not pay back."], ["Z-spread", "The single extra % added to every government spot rate so the price equals the company bond's market price."], ["Default (niewypłacalność)", "When a borrower doesn't pay what it owes."], ["Recovery rate (stopa odzysku)", "The % of the money investors still get back after a default."], ["Credit rating", "A grade for how safe a borrower is: AAA best … BBB lowest 'investment grade' … below = 'junk' (high yield)."], ["Covenant", "A promise or restriction in the bond contract (e.g. 'no more borrowing')."], ["Seniority", "Your place in the repayment queue if the borrower goes bankrupt. Senior = paid first."], ["Callable bond", "The issuer can pay it back early (it will, when rates fall)."], ["Liquidity (płynność)", "How easily you can sell something quickly without losing value."], ["Hedge (zabezpieczenie)", "A position that loses when your main position gains, and vice versa, to cancel risk."], ["Long / short", "Long = you own it and gain if it rises. Short = you sold it (or bet against it) and gain if it falls."], ["Derivative (instrument pochodny)", "A contract whose value depends on something else (rates, a bond, inflation, a company's default)."], ["Notional (kwota nominalna)", "The amount a derivative is calculated on (e.g. €10m). It is usually never paid itself."], ["Interest rate swap (IRS)", "Two parties exchange fixed interest payments for floating ones on a notional amount; only the difference is paid."], ["Fixed vs floating rate", "Fixed = always the same. Floating = changes with a market rate."], ["Swap rate", "The fixed rate in a swap that makes the swap worth 0 at the start."], ["CDS – credit default swap", "Insurance against a company defaulting. Buyer pays a yearly premium; seller pays the loss if default happens."], ["Inflation swap", "One side pays an agreed inflation rate, the other pays real inflation. One payment at the end."], ["Breakeven inflation", "The inflation rate both sides of an inflation swap agree on today."], ["Futures (kontrakt terminowy)", "A standard exchange contract to buy or sell something later at a price agreed today."], ["Margin (depozyt zabezpieczający)", "The small deposit you post to hold a futures position."], ["Option", "The right, but not the obligation, to buy or sell something at a set price."], ["Securitisation (sekurytyzacja)", "Packing many loans together and selling them to investors as a tradeable security."], ["ABS – asset-backed security", "A security made from a pool of loans (car loans, credit cards, mortgages…). Investors are paid from the borrowers' repayments."], ["MBS – mortgage-backed security", "An ABS made from home loans (mortgages, kredyty hipoteczne)."], ["Prepayment (wcześniejsza spłata)", "When a borrower pays back a loan early, e.g. to refinance at a lower rate."], ["SPV – special purpose vehicle (spółka celowa)", "A separate company created to hold the loans, so they are safe if the bank fails."], ["Tranche (transza)", "A slice of a loan pool with its own risk: senior (safest), mezzanine (middle), equity (riskiest)."], ["Waterfall", "The order of payment in a securitisation: cash goes to senior first; losses hit equity first."], ["CDO / CLO", "Pools split into tranches. CLO = loans to heavily indebted companies. CDO = bonds or other ABS."], ["CMO", "An MBS pool split into tranches that receive principal one after another (A, then B, then C)."], ["IO / PO", "A mortgage pool split into an interest-only part (IO) and a principal-only part (PO)."], ["Principal (kapitał)", "The borrowed amount itself, as opposed to the interest."], ["Central bank", "The bank for banks: issues money, sets the main interest rate, lends to banks in a crisis. US = the Fed."], ["Reserves (rezerwy)", "Money that banks keep in their accounts at the central bank."], ["Fed Funds rate", "The rate at which US banks lend reserves to each other overnight, without collateral."], ["Open market operations", "The Fed buying or selling government bonds to add or remove reserves and steer the Fed Funds rate."], ["QE – quantitative easing", "The central bank buying lots of long-term bonds to push long-term rates down."], ["Repo", "Sell a bond today, buy it back tomorrow slightly higher = a short loan secured by the bond."], ["Collateral (zabezpieczenie)", "An asset given as security for a loan; the lender keeps it if you don't pay."], ["SOFR", "The US overnight rate on repo loans secured by government bonds; it replaced LIBOR."], ["Money market", "The market for loans shorter than one year (T-bills, repo, commercial paper)."], ["T-bill", "A short US government bond (under 1 year)."], ["Commercial paper", "A short, unsecured IOU from a strong company (under 270 days)."], ["Leverage (dźwignia)", "Investing with borrowed money; it boosts both gains and losses."], ["Fiat money (pieniądz fiducjarny)", "Money not backed by gold; valuable because of law and trust."], ["Treasury", "A US government bond. 'The Treasury' = the US finance ministry."]];
const CARDS = [
[
"Day 1",
"Compare debt and equity as sources of financing.",
"<b>Debt</b> is a contractual obligation: fixed interest and principal repaid at maturity, <b>senior</b> in default, no voting rights, capped upside, and interest is tax-deductible. <b>Equity</b> is ownership: discretionary dividends, permanent capital, <b>last</b> in default, unlimited upside, and issuing it dilutes existing owners. Governments, firms and households can all borrow, but only firms can issue equity.",
[
"senior",
"tax-deductible",
"dilution",
"residual claim"
],
"A company can get money in two ways. Debt: it borrows and must pay it back with interest. Equity: it sells shares, i.e. pieces of ownership (udziały). If the company goes bankrupt, lenders are paid first and shareholders get whatever is left, usually nothing. But shareholders can earn a lot if the company does well; lenders only ever get their interest.",
"Debt is a loan: fixed interest, repaid at maturity, paid first in default, no vote, and interest is tax-deductible. Equity is ownership: no fixed payments, paid last in default, unlimited upside, and it dilutes existing owners."
],
[
"Day 1",
"Why might a company prefer to issue debt rather than equity?",
"Debt does not dilute ownership or voting control, and interest is tax-deductible while dividends are not, so it is a cheaper source of capital. Terms (amount, maturity, currency) can be tailored, and owners keep full decision-making power as long as payments are made. The trade-off is fixed obligations and default risk.",
[
"no dilution",
"tax shield",
"control",
"flexibility"
],
"If a company borrows, the owners still own 100% of the company and keep all the decisions. Interest on debt lowers the company's tax bill (it is tax-deductible), dividends to shareholders do not. So debt is cheaper. The downside: interest must be paid every year, even in a bad year, or the company defaults (niewypłacalność).",
"Debt does not dilute ownership or control, and interest is tax-deductible, so it is cheaper than equity. The downside is fixed payments and the risk of default."
],
[
"Day 1",
"Why do investors like debt?",
"Payments are contractual and predictable, which makes debt easy to value and to match against liabilities. Debt is senior to equity in default, so it is less risky for the same issuer, and the maximum gain and loss are known. Debt markets are also deep and liquid.",
[
"predictable",
"seniority",
"defined risk",
"liquidity"
],
"As a lender you know exactly how much you will get and when. If the company fails, you are paid before the shareholders. You know your maximum gain and loss in advance. And bonds are easy to buy and sell.",
"Payments are fixed and predictable, debt is paid before equity in default, so it is less risky, and debt markets are deep and liquid."
],
[
"Day 1",
"Why is the interest rate called the 'lynchpin' of the economy?",
"It is the price of borrowing: low rates make borrowing cheap so firms invest and households spend, high rates cool the economy. It is the threshold separating productive from unproductive investment. The central bank uses it as its main lever; mistakes are costly – too low for too long causes excess borrowing and inflation, too high starves investment and raises unemployment.",
[
"price of credit",
"policy lever",
"misallocation"
],
"The interest rate is the price of borrowing money. When it is low, people and firms borrow and spend, so the economy grows (too low for too long → prices rise = inflation). When it is high, borrowing is expensive, so the economy slows (too high → people lose jobs). That is why the central bank (the bank that controls a country's money, e.g. the Fed in the US) steers the economy with the interest rate.",
"The interest rate is the price of borrowing. Low rates encourage borrowing, investment and spending; high rates slow the economy. It is the central bank's main lever, and mistakes cause inflation or unemployment."
],
[
"Day 1",
"What is the difference between a loan and a bond?",
"A loan is a private, bilateral contract (usually with a bank) with negotiated terms; it stays on the lender's balance sheet and normally cannot be traded – relationship-based, suited to smaller borrowers. A bond is a standardised, tradeable security sold to many investors, with terms set in a public indenture; it trades in a secondary market with transparent prices – suited to large borrowers.",
[
"bilateral",
"tradeable",
"indenture",
"secondary market"
],
"A loan is a deal between you and one bank. It stays with that bank and cannot easily be sold to someone else. A bond is a loan cut into many small pieces and sold to many investors; each piece can be resold to other investors on the market (the secondary market). Small companies use bank loans, big companies and governments issue bonds.",
"A loan is a private contract with one lender (usually a bank) and is not traded. A bond is a standardised security sold to many investors and traded in a secondary market. Loans suit smaller borrowers, bonds suit large ones."
],
[
"Day 1",
"What is a bond indenture?",
"The legal contract between the issuer and bondholders (umowa emisyjna). It sets coupon, maturity, covenants, seniority and any embedded options, and is administered by a trustee on behalf of bondholders. Because the same public terms apply to every holder, bonds can be standardised and traded.",
[
"legal contract",
"covenants",
"trustee"
],
"The indenture (umowa emisyjna) is the rulebook of a bond: the coupon (the yearly interest payment), the maturity (the date the money is paid back), the covenants (promises and restrictions for the company) and the order of repayment. A trustee (powiernik) checks that the company follows the rules on behalf of all bondholders.",
"The indenture is the legal contract between issuer and bondholders. It sets the coupon, maturity, covenants, seniority and options, and a trustee enforces it for bondholders."
],
[
"Day 1",
"Describe the four basic bond structures.",
"<b>Fixed rate:</b> coupon set at issue, never changes. <b>Floating rate:</b> coupon resets to a reference rate plus a fixed spread, so it moves with market rates. <b>Zero-coupon:</b> no coupon, issued at a discount, return = price vs par. <b>Inflation-linked</b> (e.g. TIPS): principal indexed to CPI, so the real value is preserved.",
[
"fixed",
"floating",
"zero",
"inflation-linked"
],
"Fixed rate: the coupon (yearly interest) is always the same, e.g. 5%. Floating rate: the coupon moves with a market rate, e.g. market rate + 1%. Zero-coupon: no interest during the life; you buy it cheap (e.g. 80) and get 100 at the end. Amortising: the borrowed amount is paid back in parts over time, like a mortgage.",
"Fixed rate: the coupon never changes. Floating rate: reference rate plus a spread. Zero-coupon: no coupons, bought at a discount, pays 100 at maturity. Amortising: principal is repaid gradually."
],
[
"Day 1",
"Why does a callable bond pay a higher yield than a comparable non-callable bond?",
"The issuer holds the option to redeem early and uses it when rates fall below the coupon – exactly when the investor would gain and now has to reinvest at low rates (reinvestment risk). The investor's price upside is capped near the call price (negative convexity). Investors demand compensation for this short option: a higher coupon/yield or a lower issue price.",
[
"issuer's option",
"rates fall",
"reinvestment risk",
"negative convexity"
],
"A callable bond lets the company pay the bond back early. It will do that when market rates fall, because it can then borrow again more cheaply. So the investor loses the bond exactly when it was a good deal and must reinvest at the lower rates. To accept that risk, investors want a higher interest rate.",
"The issuer can redeem the bond early and will do so when rates fall, so the investor loses the bond exactly when it is most valuable. The investor is short a call option and demands a higher yield as compensation."
],
[
"Day 1",
"Explain putable and convertible bonds and how investors pay for them.",
"A <b>putable</b> bond lets the investor sell it back early – useful when rates rise, so the investor can reinvest at better terms. A <b>convertible</b> lets the investor convert into a set number of shares – downside protection plus equity upside. Because the option belongs to the investor, the investor pays for it by accepting a lower yield/coupon.",
[
"investor's option",
"lower yield"
],
"A putable bond lets the INVESTOR give the bond back to the company early, which is useful when rates rise. A convertible bond lets the investor swap the bond for company shares, which is useful if the share price rises. Both are extras that benefit the investor, so the investor accepts a lower coupon (yearly interest).",
"A putable bond lets the investor sell it back to the issuer early; a convertible lets the investor swap it for shares. Both options belong to the investor, so the investor pays for them with a lower coupon."
],
[
"Day 1",
"Market rates rise after a bond is issued. What happens and why?",
"The coupon is fixed, so the bond's payments become less attractive than new bonds paying the higher market rate. Investors will only buy it at a lower price, so the price falls until its yield matches the market. Price and yield always move in opposite directions.",
[
"fixed coupon",
"price falls",
"inverse"
],
"Say your bond pays 4%, but new bonds now pay 6%. Nobody will pay 100 for your 4% bond when they can get 6% elsewhere. So your bond's price must fall below 100, until a buyer earns about 6% in total. Rule: market rates up → bond prices down.",
"The bond's coupon is now below the market rate, so investors will only buy it at a lower price. The price falls below par until its yield equals the new market rate: rates up, prices down."
],
[
"Day 1",
"What is the yield curve and why does it matter?",
"It plots yield against maturity for bonds of the same credit quality (usually government bonds). It is the foundation for pricing every bond, it shapes portfolio construction, and its shape signals macroeconomic conditions (e.g. expectations of future rates).",
[
"maturity",
"same credit",
"benchmark"
],
"The yield curve (krzywa dochodowości) is a chart showing how much interest government bonds pay for each length of time: 1 year, 2 years, 10 years… Usually longer = higher rate. If short bonds pay more than long ones (an inverted curve), a recession often follows. All other bonds are priced relative to this curve.",
"The yield curve plots yields against maturity. It is normally upward-sloping; an inverted curve often signals recession. It is the benchmark for pricing all other bonds."
],
[
"Day 1",
"Nominal vs real rates – what's the relationship?",
"The nominal rate is the quoted yield; the real rate is what remains after inflation: real ≈ nominal − expected inflation (5% nominal with 3% inflation ≈ 2% real). Bond investors bear inflation risk – if inflation exceeds expectations, the real return falls. Higher expected inflation therefore leads investors to demand higher nominal yields; TIPS target the real rate directly.",
[
"purchasing power",
"inflation risk",
"TIPS"
],
"The nominal rate is the number you see, e.g. 5%. The real rate is what you really earn after prices go up (inflation). 5% interest with 3% inflation ≈ 2% real.",
"Nominal rate ≈ real rate + expected inflation (Fisher). A 5% nominal yield with 3% inflation gives about 2% real return."
],
[
"Day 1",
"How does a US Treasury auction work?",
"The Treasury announces the security and amount in advance. Institutions submit <b>competitive bids</b> (yield + quantity), accepted from the lowest yield up until the issue is filled; retail submits <b>non-competitive bids</b> and accepts the clearing yield (up to $10m). It is a uniform-price ('Dutch') auction: every winner receives the same <b>stop-out</b> yield, and the coupon is set just below it (nearest 1/8%).",
[
"competitive",
"non-competitive",
"stop-out rate",
"uniform price"
],
"The US government (the Treasury) sells its bonds at an auction. Big investors bid: 'I'll buy this amount if I get this yield (interest rate)'. Small investors just accept the result. The government accepts the bids with the lowest rates first, until it has sold everything. All winners get the same rate: the highest one accepted.",
"The Treasury announces the issue. Institutions bid yield and quantity, retail bids non-competitively. Bids are filled from the lowest yield up, and all winners get the same stop-out yield (uniform-price auction)."
],
[
"Day 1",
"What are primary dealers?",
"Banks and broker-dealers designated by the New York Fed (24 in 2026). They are obliged to bid meaningfully at every Treasury auction, to make two-way markets in Treasuries and to act as counterparties in the Fed's open market operations. In return they deal directly with the Fed, use its repo facilities and gain prestige and deal flow.",
[
"obligations",
"privileges",
"Fed counterparty"
],
"Primary dealers are a group of big banks that must buy at every US government bond auction and must keep buying and selling these bonds afterwards. In return they get to trade directly with the Fed (the US central bank). They make sure every auction is a success.",
"Primary dealers are large banks that must bid at every Treasury auction and make markets in Treasuries. In return they trade directly with the Fed, which guarantees demand at auctions and liquidity."
],
[
"Day 1",
"Explain the capital structure and why seniority matters.",
"In bankruptcy, claims are paid in strict order: senior secured (claim on pledged collateral) → senior unsecured → subordinated → equity (last). Seniority determines expected recovery and therefore risk: the higher the seniority, the lower the risk and the lower the yield investors require.",
[
"secured",
"unsecured",
"subordinated",
"recovery"
],
"The capital structure is the queue for being repaid when a company goes bankrupt. First: secured debt (backed by assets, zabezpieczony). Then senior debt, then subordinated debt (podporządkowany), and last the shareholders. The further back in the queue, the bigger the risk of getting nothing, so the higher the interest investors demand.",
"In default, claims are paid in order: secured debt, senior unsecured, subordinated, then equity. The further back in line, the lower the recovery and the higher the yield investors demand."
],
[
"Day 1",
"What are affirmative and negative covenants? Give examples.",
"Covenants are binding conditions in the indenture that protect bondholders. <b>Affirmative</b> covenants require actions – maintain minimum financial ratios (e.g. interest coverage), provide financial reports, maintain pledged assets, comply with laws and taxes. <b>Negative</b> covenants restrict actions – limits on additional debt, asset sales or M&amp;A, dividend payments and capital expenditure.",
[
"must do",
"must not do",
"protect bondholders"
],
"Covenants are promises the company makes in the bond contract. Affirmative covenants = things it MUST do: publish accounts, pay taxes, insure its assets. Negative covenants = things it must NOT do: borrow much more, sell important assets, pay big dividends to shareholders. They protect the lenders.",
"Affirmative covenants say what the issuer must do (publish accounts, pay taxes, maintain assets). Negative covenants say what it must not do (take on more debt, sell key assets, pay large dividends). They protect bondholders."
],
[
"Day 1",
"What are the main risks of a corporate bond for an investor?",
"<b>Rate risk</b> (price falls when rates rise), <b>default risk</b> (missed payments; recovery depends on seniority), <b>spread risk</b> (the credit spread widens even if Treasury yields are unchanged), <b>call risk</b> (early redemption when rates fall → reinvestment at lower rates) and <b>liquidity risk</b> (wider bid-ask, dealers withdraw in stress).",
[
"rate",
"default",
"spread",
"call",
"liquidity"
],
"Rates rise → the bond's price falls. The company doesn't pay you back (default). The company's credit rating is cut → the price falls. You can't sell the bond easily (liquidity risk). The company pays you back early when it suits them, not you (call risk).",
"Interest rate risk, default risk, downgrade and spread-widening risk, liquidity risk, and call risk if the bond is callable."
],
[
"Day 1",
"A corporate bond's price falls while Treasury yields are unchanged. Explain.",
"Its yield = Treasury yield + credit spread. The spread can widen independently because of weaker issuer financials, a downgrade, sector stress, risk-off sentiment or lower liquidity. A wider spread raises the yield and therefore lowers the price, even with Treasuries flat – that is spread risk.",
[
"credit spread",
"widening",
"downgrade"
],
"A company's bond pays the government rate plus an extra amount for the risk that the company might not pay back. This extra is the credit spread. If the government rate hasn't moved but the bond price fell, the spread went up: the market is more worried about this company (bad results, rating cut).",
"Corporate yield = Treasury yield + credit spread. If Treasury yields are unchanged, the credit spread must have widened, meaning the market sees higher default risk (e.g. bad results or a downgrade)."
],
[
"Day 1",
"What do credit ratings do and what are their weaknesses?",
"Agencies (S&amp;P, Moody's, Fitch) assess the ability and willingness to repay; investment grade runs from AAA to BBB−/Baa3, below that is high yield. The rating largely determines the credit spread, and a downgrade to high yield can force institutional holders to sell. Weakness: the issuer-pays model creates a conflict of interest (seen in 2008 with AAA structured products).",
[
"investment grade",
"high yield",
"issuer pays",
"forced selling"
],
"Rating agencies (S&P, Moody's, Fitch) give each borrower a grade for how safe it is: AAA is the best, below BBB is called 'junk' or high yield. Problems: the company being rated pays the agency (conflict of interest), ratings often change too late, and in 2008 they gave AAA to very risky mortgage products.",
"Ratings summarise default risk on a simple scale and decide whether a bond is investment grade. Weaknesses: the issuer pays the agency (conflict of interest), ratings react late, and they failed badly on ABS in 2008."
],
[
"Day 1",
"How can a government reduce its debt-to-GDP ratio?",
"Cut spending or raise taxes (politically hard, and in the US taxes would need to be huge), grow GDP faster than debt (the ideal – how the US cut post-WWII debt), inflate it away (works only briefly, until expectations adjust and nominal rates rise), or default (common for foreign-currency sovereigns, but unthinkable for the US because it would destroy the dollar's reserve status).",
[
"growth",
"inflation",
"default",
"fiscal restraint"
],
"Debt-to-GDP = government debt compared with the size of the economy. Four ways to cut it: spend less or tax more (politically hard); grow the economy faster than the debt (the best way, used by the US after WWII); let inflation shrink the real value of the debt (works only briefly); or not pay (default, unthinkable for the US).",
"Cut spending or raise taxes, grow GDP faster than debt (the best option), inflate the debt away (works only briefly), or default (unthinkable for the US)."
],
[
"Day 1",
"How is the economic system organised, and what does the financial economy do?",
"The real economy produces and consumes goods and services; resources are scarce and production comes before revenue, so firms need funding. The financial economy channels savings and credit to those who need them, connects resources with opportunities, solves the intertemporal problem (borrow today against future income) and creates credit – banks lend money into existence. Households, businesses, governments and financial institutions all lend to, borrow from and invest in each other.",
[
"real vs financial economy",
"intertemporal",
"credit creation",
"four sectors"
],
"The real economy makes and consumes goods and services. But you need money before you can produce anything. The financial economy moves money from people who save to people who need it, and lets people borrow today against money they will earn later. Banks also create new money when they lend.",
"The real economy produces goods and services; the financial economy channels savings to those who need funding, lets people borrow against future income, and creates credit."
],
[
"Day 1",
"Describe the flow of funds between lenders and borrowers.",
"Lenders (households, institutions) provide funds either through commercial banks (deposits → loans) or directly through debt markets (buying bonds), often via financial institutions such as asset managers and pension funds. The central bank sits beneath the system, creating base money and steering rates, while commercial banks create credit money when they lend.",
[
"banks vs markets",
"intermediaries",
"money creation"
],
"Money moves from savers to borrowers in two ways. Through a bank: you deposit money, the bank lends it out. Or directly through the market: you buy a bond. Under everything sits the central bank, which creates the base money and sets the interest rate.",
"Lenders fund borrowers either indirectly through banks (deposits into loans) or directly through debt markets (buying bonds). The central bank underpins the system by creating base money and setting rates."
],
[
"Day 1",
"What are the key facts about global and US debt?",
"Global debt exceeds $385T, about 3.3× global GDP, spread across corporations (~29%), governments (~27%), financial institutions (~25%) and households (~19%) – no sector dominates. US debt is about $110T, with government the largest borrower (~37%). In FY2025 the US spent $7.3T against $5.2T revenue – a $2.1T deficit; the dollar's reserve-currency status creates structural foreign demand for Treasuries.",
[
"$385T",
"3.3× GDP",
"$2.1T deficit",
"reserve currency"
],
"The world has over $385 trillion of debt, about 3.3 times the world's yearly output (GDP), shared fairly evenly between companies, governments, banks and households. The US has about $110 trillion; the government is the largest borrower. In 2025 the US government spent $7.3T but collected only $5.2T, a $2.1T gap (deficit).",
"Global debt is over $385T, about 3.3× world GDP, spread across all sectors. US debt is about $110T, government is the largest borrower, and the FY2025 deficit was $2.1T."
],
[
"Day 1",
"Who issues bonds?",
"<b>Sovereigns</b> (Treasuries, Gilts, Bunds) – risk-free in local currency and the benchmark for all other bonds. <b>Corporates</b> – carry credit risk and pay a spread; investment grade or high yield; subject to covenants. <b>Others</b> – supranationals (World Bank, IMF, EIB, near-sovereign quality), agencies (Fannie Mae, Freddie Mac, implicit government backing) and municipalities (varying quality, often tax advantages).",
[
"sovereign",
"corporate",
"supranational",
"agency",
"municipal"
],
"Governments (sovereigns): the safest bonds; every other bond is compared with them. Companies (corporates): might go bankrupt, so they pay more. Others: international organisations like the World Bank (supranationals), government-backed agencies (e.g. Fannie Mae), and cities (municipalities).",
"Sovereigns (risk-free in local currency and the benchmark), corporates (credit risk, so they pay a spread), and others: supranationals, agencies and municipalities."
],
[
"Day 1",
"What are the basic debt instruments and corporate debt instruments?",
"Basic: loans (bilateral, not tradeable), bonds (tradeable), money market instruments (under 1 year: T-bills, commercial paper, CDs – for liquidity management) and securitised instruments (pools of loans repackaged into securities). Corporate: bonds (1–30 years, indenture, rated), <b>commercial paper</b> (unsecured, under 270 days, only for strong credits, no indenture – working capital) and convertibles (lower coupon for equity upside).",
[
"money market",
"commercial paper",
"securitised"
],
"Basic types: loans (from a bank, not tradeable), bonds (tradeable), money market instruments (loans for less than one year, e.g. T-bills = short government bonds, and commercial paper = short company IOUs) and securitised products (many loans packed together into one tradeable security). For companies: bonds, commercial paper and convertible bonds (can be turned into shares).",
"Basic: loans, bonds, money market instruments (under one year) and securitised products. Corporate: bonds, commercial paper (short-term, unsecured, for strong firms) and convertibles."
],
[
"Day 1",
"Corporate bonds vs Treasury securities?",
"Treasuries are issued by auction, have simple standardised terms with no covenants or options, are backed by the full faith and credit of the US (no default risk) and set the risk-free rate for each maturity – the most liquid securities in the world. Corporates are issued by firms, governed by an indenture with covenants, seniority and options, carry default risk and are priced as Treasury yield + credit spread.",
[
"no default risk",
"covenants",
"credit spread"
],
"US government bonds (Treasuries) are simple, have no extra rules or options, and the US will always pay, so there is no default risk. They are the most traded bonds in the world. Company bonds have covenants (rules), options and a risk that the company won't pay, so they pay the government rate + a credit spread (extra for risk).",
"Treasuries are simple, have no default risk and are the most liquid bonds in the world. Corporates have covenants, options and default risk, so they yield Treasury + credit spread."
],
[
"Day 2",
"What are STRIPS and why are they useful?",
"STRIPS split a Treasury bond into its individual cash flows – each coupon and the principal become separate zero-coupon securities. Their prices directly give spot (zero-coupon) rates, so they are the empirical basis of the zero curve, and pension funds use them for exact liability matching. Downsides: only in a few sovereign markets and less liquid than on-the-run bonds.",
[
"zero-coupon pieces",
"spot rates",
"liability matching"
],
"A normal bond pays a coupon every year plus 100 at the end. STRIPS cut that bond into separate pieces: each payment becomes its own zero-coupon bond (a bond that pays only once, at the end). Their prices show directly the spot rate (stopa spot = the interest rate for one payment at one date) for each year.",
"STRIPS split a coupon bond into separate zero-coupon bonds, one per cash flow. Their prices give the spot rate for each maturity directly."
],
[
"Day 2",
"What is bootstrapping and when do you need it?",
"Where no STRIPS exist, spot rates are inferred from coupon bond prices one maturity at a time. Start with the shortest bond; at each step the earlier spot rates are known, so you subtract the PV of earlier cash flows from the price and solve for the last spot rate.",
[
"sequential",
"coupon bonds",
"earlier rates known"
],
"A spot rate is the interest rate for money paid at one specific date. Bootstrapping finds the spot rates step by step from normal bond prices: first year 1, then use it to find year 2, then year 3… You need it when there are no zero-coupon bonds for every year.",
"Bootstrapping derives spot rates one maturity at a time from coupon bond prices, using the spot rates already found. You need it when zero-coupon prices are not available."
],
[
"Day 2",
"Why price a bond with the spot curve rather than one YTM?",
"Each cash flow occurs at a different time and money at each maturity has its own market rate. Discounting every cash flow at its own spot rate prices the bond consistently with all other instruments and avoids arbitrage. YTM is just the single rate that reproduces that price – an average, not a discount rate.",
[
"each cash flow",
"no-arbitrage",
"YTM = average"
],
"Money in 1 year and money in 10 years are not worth the same, and they have different interest rates. YTM (yield to maturity) uses one average rate for all payments. The spot curve gives each payment its own correct rate, so the price is more accurate.",
"Each cash flow has its own time value, so it should be discounted at its own spot rate. One YTM is just an average and can misprice bonds with different cash-flow patterns."
],
[
"Day 2",
"What does the z-spread measure?",
"The constant spread that, added to every spot rate, makes the discounted cash flows equal the bond's market price. It measures the extra yield investors demand over the risk-free curve for credit, liquidity and other risks. A higher z-spread means a lower price.",
[
"constant spread",
"credit risk",
"over spot curve"
],
"A company bond is riskier than a government bond, so it must be cheaper. The z-spread is the extra % you add to every government spot rate so that the calculated price equals the bond's real market price. It is the extra pay for the company's risk.",
"The z-spread is the single spread added to every spot rate so that the discounted cash flows equal the bond's market price. It measures compensation for credit and liquidity risk."
],
[
"Day 2",
"Explain Macaulay and modified duration in words.",
"Macaulay duration is the PV-weighted average time (in years) until you receive the bond's cash flows; a zero-coupon bond's duration equals its maturity, a coupon bond's is shorter. Modified duration = Macaulay ÷ (1 + y) and gives the approximate % price change for a 1-percentage-point change in yield. Higher duration means more interest rate risk.",
[
"weighted average time",
"% price change",
"rate risk"
],
"Duration measures how sensitive a bond's price is to interest rates. Macaulay duration = the average time (in years) until you get your money back. Modified duration = how many % the price changes when rates move by 1 percentage point. Modified duration 4 → rates +1% → price about −4%.",
"Macaulay duration is the weighted average time to receive the cash flows. Modified duration is the % price change for a 1% change in yield: D_mod of 4 means about −4% if yields rise by 1%."
],
[
"Day 2",
"Why do duration and DV01 fall when yields rise?",
"Higher yields shrink distant cash flows proportionally more, so the earlier cash flows carry more weight and the average time shortens. The price is also lower, so each basis point moves fewer dollars. Longer maturity or lower coupon, by contrast, raise duration.",
[
"distant cash flows",
"weights",
"lower price"
],
"When rates rise, money far in the future is discounted more heavily, so it counts for less. The average time until you are paid (duration) gets shorter. DV01 (how many $ the price moves for a 0.01% rate change) also falls, because the price is already lower, so there is less to lose.",
"Higher yields shrink the present value of distant cash flows most, so the average time falls and duration falls. DV01 also falls because the price itself is lower."
],
[
"Day 2",
"What is convexity and why is positive convexity good?",
"Duration treats the price-yield relationship as a straight line, but it is curved. With positive convexity the price rises more when yields fall than it falls when yields rise by the same amount – asymmetric in the investor's favour. Callable bonds and MBS can have negative convexity, which is bad for the holder.",
[
"curvature",
"asymmetry",
"correction to duration"
],
"Duration pretends the price–rate relationship is a straight line, but really it is curved. Convexity (wypukłość) is that curve. Positive convexity: when rates fall you gain MORE than duration says, when rates rise you lose LESS. It is always good for the bond owner.",
"Convexity is the curvature of the price–yield relationship. With positive convexity, prices rise more when yields fall and fall less when yields rise than duration predicts, which benefits the holder."
],
[
"Day 2",
"How do you hedge a corporate bond's interest rate risk, and what risk remains?",
"Compute the bond's DV01 and take an offsetting position with the same DV01 – short Treasuries, sell bond futures or enter a pay-fixed swap; hedge ratio N = DV01(position) ÷ DV01(hedge). Rate moves then cancel out. Credit spread risk (and liquidity risk) remains; it could be hedged separately by buying CDS protection.",
[
"DV01 matching",
"hedge ratio",
"spread risk remains"
],
"A company bond loses value when rates rise. To protect it, you sell (short) a government bond or a futures contract with the same DV01 (same $ change for a 0.01% rate move). If rates move, the gain on one covers the loss on the other. What's left: the company's own risk. If its credit spread rises, the hedge does not help.",
"Short Treasuries or futures with the same DV01, so total DV01 = 0 and parallel rate moves cancel out. Credit spread risk remains, along with curve and basis risk."
],
[
"Day 2",
"What does it mean if forward rates are realised, and why?",
"Forwards are the future rates implied by today's curve under no-arbitrage. If they are realised, every strategy over a horizon – holding a zero, rolling short bonds or holding and selling a long bond – earns the same return: the spot rate for that horizon. Deviations from the forwards are what create gains or losses.",
[
"no-arbitrage",
"horizon return = spot"
],
"Forward rates are future interest rates that are hidden inside today's yield curve. If they really happen, it doesn't matter which bond you buy: every bond earns the same, equal to today's spot rate for your holding period.",
"If forward rates are realised, every bond earns the same return over the horizon: today's spot rate for that horizon. Forward rates are exactly the break-even rates that make all strategies equal."
],
[
"Day 2",
"Clean vs dirty price – what and why?",
"Coupons are paid on fixed dates but bonds trade every day, so the seller has earned part of the next coupon. The buyer pays this <b>accrued interest</b> on top: dirty (full) price = clean price + accrued interest = PV of future cash flows. The dirty price drifts up and drops on coupon dates; the clean price removes this so bonds are comparable – it is what screens quote.",
[
"accrued interest",
"settlement price",
"quoting convention"
],
"Between coupon dates, interest builds up (accrued interest = odsetki narosłe). The clean price is the price without it; this is the price you see quoted. The dirty price is what you actually pay: clean price + accrued interest, because the seller held the bond for part of the year and is owed that interest.",
"Dirty price = clean price + accrued interest. You quote clean prices so they don't jump on coupon dates, but you pay the dirty price, because the seller is owed interest for the time they held the bond."
],
[
"Day 2",
"On-the-run vs off-the-run Treasuries – why do yields differ?",
"On-the-run is the most recently issued bond of a maturity and the most liquid; off-the-run are older issues. Cash flows and credit are almost identical, so the small extra yield on off-the-run bonds is a liquidity premium. Relative value traders buy the cheap one and sell the rich one with matched DV01 to earn the gap.",
[
"liquidity premium",
"relative value"
],
"On-the-run = the newest government bond of a given length (e.g. the newest 10-year). Everyone trades it, so it is the easiest to buy and sell (most liquid). Off-the-run = older bonds, almost the same but traded less, so they pay slightly more. That small extra is payment for lower liquidity (płynność).",
"On-the-run is the newest and most liquid issue; off-the-run bonds are older. Their cash flows are almost the same, so the small extra yield on off-the-run bonds is a liquidity premium."
],
[
"Day 2",
"What is a relative value trade and what are its risks?",
"Buy the relatively cheap security and sell the rich one, matching DV01 so you bet on the spread, not on the level of rates (e.g. on/off-the-run, coupon bond vs STRIPS, 2s-5s-10s butterfly). You profit as the gap closes and earn carry meanwhile. Risks: the gap can widen before it closes, and financing costs.",
[
"matched DV01",
"spread bet",
"butterfly"
],
"You buy a bond that looks too cheap and sell a very similar one that looks too expensive, with the same DV01, so a general move in rates doesn't matter. You bet only that the price gap will close. Risk: the gap can first get bigger, and borrowing to fund the trade costs money.",
"Buy the cheap bond and sell the similar rich one with matched DV01, betting on the gap closing, not on rate levels. Risks: the gap can widen first, and financing costs."
],
[
"Day 2",
"How does fixed-income analysis differ from equity analysis?",
"Bond cash flows are contractually defined, so valuation is the PV of a known stream discounted at the required yield – modelling is precise. Pricing linkages are strong: no-arbitrage ties together bonds of similar maturity, credit and structure. Equity cash flows are discretionary, valuation rests on uncertain earnings forecasts and multiples, and each stock is priced more independently.",
[
"contractual cash flows",
"no-arbitrage",
"precise"
],
"With a bond you know in advance how much you'll get and when, so you just calculate its value (discounting). With shares nothing is fixed; you have to guess the company's future profits.",
"Bond cash flows are fixed by contract, so value comes from discounting known payments. Equity cash flows are uncertain, so value depends on forecasting the company's earnings."
],
[
"Day 2",
"What is the time value of money and how do you compare investments?",
"A dollar today is worth more than a dollar tomorrow because it can earn interest: FV = PV(1+r)^n, PV = FV/(1+r)^n, r = (FV/PV)^(1/n) − 1. To compare investments of different lengths, use the annualised compounded return (CAGR), not total return – e.g. 100 → 161 in 5 years (10.0% p.a.) beats 150 → 300 in 8 years (9.1% p.a.) even though the second doubles the money.",
[
"compounding",
"CAGR",
"annualise"
],
"Money today is worth more than money in a year, because today you can invest it and earn interest. To compare investments, you convert everything to today's value (discounting, dyskontowanie) or to an average yearly return (CAGR = compound annual growth rate).",
"Money today is worth more than money later because it can earn interest. You compare investments by discounting cash flows to present value or by comparing annualised returns (CAGR)."
],
[
"Day 2",
"What is 'pull to par'?",
"As a bond approaches maturity its price converges to face value, whatever price it started at, because the final payment is the face value. Premium bonds drift down to 100 and discount bonds drift up to 100.",
[
"converges to face value"
],
"At the end you always get 100. So as the maturity date gets closer, the bond's price moves toward 100: a cheap bond rises to 100, an expensive one falls to 100. This is pull to par.",
"As maturity approaches, a bond's price converges to its face value of 100, whether it started at a discount or a premium."
],
[
"Day 2",
"What is the credit spread, what drives it, and why is it additive with rate risk?",
"The credit spread is the z-spread of a corporate bond over the risk-free spot curve: compensation for default risk (higher for lower ratings) and a liquidity premium. It widens on downgrades, weaker financials or risk-off sentiment and tightens when credit improves. Spread widening has the same price impact as a parallel rise in the risk-free curve – the two risks add up.",
[
"default + liquidity",
"widening",
"additive"
],
"The credit spread is the extra interest a company pays above the government rate, because it might not pay back. It rises when the company's rating falls, results get worse, a recession comes, or the bond is hard to sell. Company yield = government rate + spread, so the two risks add up.",
"The credit spread is the extra yield over Treasuries for default and liquidity risk. It widens with weaker credit quality, recessions and poor liquidity. Yield = risk-free rate + spread, so rate risk and spread risk add up."
],
[
"Day 2",
"Z-spread vs option-adjusted spread (OAS)?",
"The z-spread assumes fixed cash flows, so it is right for option-free bonds. For callable bonds, MBS and ABS, it mixes credit risk with the value of the embedded option. The OAS strips out the option value and leaves a purer measure of credit and liquidity compensation – the standard measure for bonds with options.",
[
"fixed cash flows",
"option value",
"callable, MBS, ABS"
],
"Some bonds contain an option, e.g. a callable bond (the company can repay early). The z-spread (extra over government rates) ignores this option, so for a callable bond it looks too high, because part of it is really payment for the option. The OAS (option-adjusted spread) removes the option's value and shows the pure extra for credit risk.",
"The z-spread ignores embedded options; the OAS removes the option's value first. For a callable bond the z-spread overstates the credit spread, so OAS is the better measure."
],
[
"Day 2",
"What is DV01, what is it used for, and what are its limits?",
"DV01 = |P(z + 1bp) − P(z)|: the dollar price change for a 1bp rise in the z-spread or, equivalently, a 1bp parallel shift of the spot curve; always positive and additive across a portfolio. Uses: risk limits, hedging (match DV01s) and position sizing. Limits: it is a linear approximation that breaks down for large moves because of convexity. Shortcut: DV01 ≈ Dmod × Price × 0.0001.",
[
"1bp",
"additive",
"linear approximation"
],
"DV01 = how many dollars a bond's price changes when rates move by 0.01% (one basis point = 1bp). It tells you how much rate risk you have and how much to hedge. Limits: it only works for small moves and assumes all rates on the curve move by the same amount.",
"DV01 is the price change for a 1bp rate move. It measures rate risk and sets hedge ratios. Limits: it works only for small moves, assumes parallel shifts, and changes as rates change."
],
[
"Day 2",
"What are the limitations of a DV01 hedge?",
"It neutralises parallel shifts only – non-parallel moves such as a steepener leave residual risk. It does not protect against credit spread widening, so rate and credit risk need separate instruments. And because DV01 is a linear approximation that changes over time and with spreads, the hedge must be rebalanced, especially after large moves.",
[
"parallel only",
"spread risk",
"rebalance"
],
"A DV01 hedge (protection that matches $ sensitivity) only works if all rates move by the same small amount. It fails if short and long rates move differently, if the move is large, or if the company's credit spread changes. And it must be adjusted over time.",
"It only protects against small parallel shifts. Curve twists, large moves (convexity) and credit spread changes are not hedged, and it must be rebalanced as DV01 changes."
],
[
"Day 2",
"What is scenario analysis and how is it done?",
"It estimates P&amp;L under a specified change in the spot curve or spreads – parallel shifts, steepening/flattening, inversion or historical stresses (1994, 2008, 2020). You define a vector of rate shifts per maturity, reprice every position on the new curve and take P&amp;L = repriced value − current value. Unlike DV01 it handles large and non-parallel moves; it is used for risk management, stress tests and communication with management.",
[
"reprice",
"non-parallel",
"stress"
],
"You invent a 'what if' (e.g. short rates +1%, long rates +2%), recalculate the price of everything on this new curve, and see how much you'd gain or lose. Better than DV01 for big or uneven rate moves.",
"Define a shift for each maturity, reprice every position on the new curve, and compute P&L = new value − current value. It handles large and non-parallel moves that DV01 cannot."
],
[
"Day 2",
"Are forward rates forecasts? Explain.",
"No. A forward rate is the break-even rate implied by today's spot curve under no-arbitrage – e.g. investing 2 years at 4.5% must equal 1 year at 4% then rolling at f. It is known today; the rate that will actually prevail is unknown and may differ. The forward curve is the break-even: a rate view adds value only if realised rates deviate from the forwards.",
[
"implied, not forecast",
"break-even",
"no-arbitrage"
],
"No. A forward rate is just the rate calculated from today's curve at which all strategies end equal. It also includes extra pay for the risk of holding long bonds (a term premium), so it is usually higher than what really happens later.",
"No. Forward rates are break-even rates implied by today's curve, and they include a term premium, so they usually overstate future spot rates."
],
[
"Day 2",
"What are the sources of return in horizon analysis?",
"Coupon income received during the holding period (known at purchase), reinvestment return on those coupons at the scenario's short rates, and the horizon value – remaining cash flows discounted back to the horizon at the scenario's spot rates. Combined with scenarios, it shows total return under different rate paths, expressed as an annualised rate so bonds of different maturities are comparable.",
[
"coupons",
"reinvestment",
"horizon value"
],
"Horizon analysis = what you earn if you hold a bond for a set time and then sell it. You earn from three things: the coupons (yearly interest) you receive, the interest you earn by reinvesting those coupons, and the price you sell the bond for at the end.",
"Coupons received, interest on reinvested coupons, and the horizon value (the sale price at the horizon date, from the curve at that time)."
],
[
"Day 2",
"What is the par yield and the par yield curve?",
"The par yield for maturity T is the coupon that makes a bond price exactly 100 when discounted at the spot rates: c = (100 − 100·DF_T) / ΣDF. Most bonds are issued near par, with coupons set at the par yield. The par curve is what the media call 'the yield curve'; par, spot and forward curves carry the same information, each derivable from the others. The swap rate equals the par yield.",
[
"coupon for price 100",
"media yield curve",
"same information"
],
"The par yield is the coupon (yearly interest) that makes a bond's price exactly 100. The par yield curve shows this coupon for each length of time. It is also the swap rate.",
"The par yield is the coupon rate that makes a bond's price equal 100 for a given maturity. The par yield curve shows it for each maturity, and it equals the swap rate."
],
[
"Day 2",
"What is the main weakness of YTM?",
"YTM applies one rate to all cash flows regardless of timing. Cash is fungible – $1 in year 3 should have the same value whichever bond it comes from – but under YTM the implied discount rate depends on each bond's structure. Use YTM for quoting and trading, and spot rates and z-spreads for pricing and analytics.",
[
"one rate for all",
"cash is fungible",
"quoting vs pricing"
],
"YTM (yield to maturity) assumes you hold the bond to the end and reinvest every coupon at the same rate. In reality rates change, so what you really earn can be different.",
"YTM assumes all coupons are reinvested at the same yield and the bond is held to maturity. If rates change, the realised return differs."
],
[
"Day 2",
"What determines convexity, and how is it priced?",
"Longer maturity and lower coupon mean higher convexity; for a given duration, zero-coupon bonds have the highest convexity. Higher convexity gains more when yields fall and loses less when they rise, so investors pay for it by accepting a lower yield. In market convention 'duration' without qualification means modified duration.",
[
"maturity, coupon",
"zeros highest",
"lower yield"
],
"Convexity (the price–rate curve bending in your favour) is bigger for longer bonds and bonds with lower coupons; zero-coupon bonds have the most. Since convexity is a free bonus, investors pay for it by accepting a slightly lower yield.",
"Longer maturity and lower coupons mean more convexity; zero-coupon bonds have the most. Because convexity is valuable, investors accept a lower yield for it."
],
[
"Day 2",
"What is immunisation? (not from the slides – application of duration)",
"Immunisation protects a portfolio against rate changes by matching the duration of assets to that of liabilities (and PVs). If rates rise, asset prices fall but reinvestment income rises; if rates fall the opposite happens – with matched duration the two effects offset, so the portfolio still meets the liability. The slides list it under hedging ('immunise a portfolio, match asset cash flows to liabilities'); it requires rebalancing as durations change.",
[
"match duration",
"price vs reinvestment effect",
"liabilities"
],
"Immunisation protects you when you must pay a fixed amount at a future date (e.g. pensions in 10 years). You set the duration of your bonds equal to that date. If rates rise, bond prices fall but you reinvest coupons at higher rates, and the reverse when rates fall. The two effects cancel out.",
"Match the duration of assets to the timing of liabilities. If rates rise, the price loss is offset by higher reinvestment income, and vice versa. It must be rebalanced over time. (Not from the slides.)"
],
[
"Day 3",
"Why use derivatives instead of cash bonds?",
"A cash bond bundles income, duration, credit and inflation risk, and you can't hold one without the others. Derivatives give unfunded, precise exposure to one risk at a time – no bond bought or sold, no balance sheet use, MTM instead of forced sales, and notional and maturity can be tailored. The main cost is counterparty risk.",
[
"isolate one risk",
"unfunded",
"counterparty risk"
],
"A derivative is a contract whose value depends on something else (e.g. interest rates or a bond), without owning that thing. Derivatives are cheaper and faster than buying bonds, need only a small deposit, and let you change your risk without buying or selling the bonds themselves.",
"Derivatives are cheaper, faster and need little upfront cash. They change risk without buying or selling the bonds themselves, and they are often more liquid than the bonds."
],
[
"Day 3",
"What is an interest rate swap and what is its main purpose?",
"Two parties exchange fixed and floating (e.g. SOFR) payments on the same notional; principal is never exchanged and only net payments settle; at inception its value is zero. Its main purpose is to manufacture DV01: the fixed leg behaves like a coupon bond, the floating leg like an FRN with almost no DV01, so the swap gives long or short duration without buying bonds.",
[
"fixed vs floating",
"net settlement",
"manufacture DV01"
],
"An interest rate swap is a deal between two parties on a notional amount (e.g. €10m, only used for the calculation, never paid). One pays a fixed rate (e.g. 5% every year), the other pays a floating rate (changes with the market). Only the difference is paid. Purpose: change your interest rate risk without touching your bonds or loans.",
"An interest rate swap exchanges fixed for floating interest payments on a notional amount; only the net difference is paid. Its main purpose is to change interest rate exposure without trading the underlying bonds or loans."
],
[
"Day 3",
"Receive fixed vs pay fixed – what is your rate exposure?",
"Receiving fixed is like owning a bond: <b>long DV01</b>, you gain when rates fall. Paying fixed is <b>short DV01</b>, you gain when rates rise. Pension funds receive fixed to match long-dated liabilities; asset managers pay fixed to cut duration before rate rises.",
[
"long DV01",
"short DV01",
"pension funds"
],
"In a swap (exchange of fixed vs floating interest): receive fixed = you get a fixed rate and pay the floating rate. If rates fall, you pay less → you gain, just like owning a bond. Pay fixed = the opposite: you gain when rates rise. Pension funds receive fixed; managers who fear rising rates pay fixed.",
"Receiving fixed is like owning a bond: you gain when rates fall. Paying fixed is like being short a bond: you gain when rates rise."
],
[
"Day 3",
"Rates rise right after a swap starts. Who loses and why?",
"The fixed receiver loses: they are locked into the old, lower fixed rate while the floating payments they owe rise. MTM for the fixed receiver = PV(fixed leg) − PV(floating leg), which becomes negative. The fixed payer gains. The fixed receiver has certain cash flows but MTM risk; the floating side resets to par each period, so it has little MTM risk.",
[
"MTM",
"PV fixed − PV floating",
"locked in"
],
"If rates rise, the floating rate goes up. Whoever receives fixed and pays floating now pays more but still gets the same fixed amount → they lose. The fixed payer gains.",
"The fixed receiver loses, because floating payments rise while the fixed rate stays the same; the swap now has negative value for them. The fixed payer gains."
],
[
"Day 3",
"Give three uses of interest rate swaps.",
"<b>Duration management</b> – lengthen or shorten portfolio duration without trading bonds. <b>Funding conversion</b> – a bank swaps fixed loan income into floating to match deposit costs; an issuer turns fixed coupons into floating funding. <b>Expressing views</b> – receive fixed to bet on falling rates, or curve trades paying at one tenor and receiving at another.",
[
"duration",
"funding conversion",
"views"
],
"Swap = exchange of fixed vs floating interest payments. 1) A company with a floating-rate loan swaps it into a fixed rate, so its payments stop changing. 2) A pension fund receives fixed to make its assets react to rates like its long-term pension promises. 3) Betting on whether rates go up or down.",
"Hedging (turning floating-rate debt into fixed), changing portfolio duration (e.g. a pension fund receiving fixed), and speculating on the direction of rates."
],
[
"Day 3",
"How does a credit default swap work?",
"The protection buyer pays a periodic premium (CDS spread × notional) to the seller. If a credit event occurs – bankruptcy, failure to pay, restructuring – the seller pays notional minus recovery, with recovery set by an ISDA auction, and premiums stop. The spread is set so the contract has zero value at inception and reflects default probability and expected recovery.",
[
"premium",
"credit event",
"notional − recovery",
"ISDA"
],
"A CDS (credit default swap) is insurance against a company going bankrupt. The buyer pays a yearly premium (e.g. 1.5% of the amount insured). If the company defaults (doesn't pay its debt), the seller pays the buyer the loss: amount × (1 − recovery rate), where recovery rate = the % still recovered from the company.",
"The protection buyer pays an annual premium (spread × notional). If the reference entity defaults, the seller pays notional × (1 − recovery rate), and the premiums stop."
],
[
"Day 3",
"Who is long and who is short credit in a CDS?",
"The <b>buyer</b> is short credit: like buying insurance, they gain if the company's credit worsens and don't need to own the bond. The <b>seller</b> is long credit: they collect premiums and bear the loss on default – economically the same as owning the bond. (Day 3 slide 15 labels this the wrong way round.)",
[
"buyer short",
"seller long"
],
"In a CDS (insurance against default): the seller of protection earns the premium as long as the company is fine, so they want the company to do well, like a bondholder → 'long credit'. The buyer of protection gains if the company gets into trouble → 'short credit'.",
"The protection seller is long credit: they gain if credit improves, like owning the bond. The protection buyer is short credit: they gain if credit worsens."
],
[
"Day 3",
"Why would an investor use a CDS instead of selling the bond?",
"A CDS removes default risk while keeping the bond – useful if the bond is illiquid, selling would trigger taxes, or the mandate requires holding it. It also allows a short credit view without owning or borrowing the bond, and synthetic long exposure where bonds are scarce; indices (CDX, iTraxx) hedge broad credit exposure. Rate and liquidity risk of the bond remain.",
[
"hedge without selling",
"short credit",
"synthetic exposure"
],
"A CDS (insurance against a company's default) lets you protect yourself without selling the bond. Selling may be hard (few buyers), expensive, cause taxes, or upset a client. A CDS is faster. You can also use it to bet on a company getting worse without owning its bonds.",
"A CDS hedges credit risk without selling an illiquid bond, triggering taxes or harming a client relationship. It is quicker and can also be used to take a view without owning the bond."
],
[
"Day 3",
"What does a widening CDS spread tell you?",
"The market prices a higher probability of default and/or a lower expected recovery – credit quality is deteriorating. Tightening signals improvement. CDS spreads are a real-time credit signal, often more liquid and timely than bond spreads.",
[
"default probability",
"market signal"
],
"The CDS spread is the price of insurance against a company's default. If it rises (widens), insurance got more expensive: the market thinks the company is more likely to default.",
"A widening CDS spread means the market sees a higher probability of default."
],
[
"Day 3",
"How does a zero-coupon inflation swap work and who gains?",
"One party pays a fixed rate (the breakeven = market-expected inflation) compounded over the tenor; the other pays realised CPI growth. There is a single net payment at maturity. If actual inflation exceeds the breakeven, the inflation receiver (fixed payer) gains; if it undershoots, the fixed receiver gains.",
[
"breakeven",
"single settlement",
"realised CPI"
],
"Breakeven inflation = the inflation rate both sides agree on today. In a zero-coupon inflation swap one side pays this agreed rate, the other pays the real inflation that happens. There is one payment at the end only. If real inflation was higher than agreed, the side receiving real inflation gains.",
"One side pays a fixed amount from the breakeven rate, N × [(1 + b)^T − 1]; the other pays actual inflation, N × (CPI_T / CPI_0 − 1). There is one net payment at maturity, and the inflation receiver gains if actual inflation beats breakeven."
],
[
"Day 3",
"Why do pension funds receive inflation and receive fixed?",
"Their liabilities are long-dated and often indexed to CPI. Receiving fixed on an IRS adds duration, so assets rise when rates fall just as liabilities' PV rises. Receiving the inflation leg pays more when inflation is high, offsetting inflation-linked pension growth – at tenors (30–50y) where inflation-linked bonds may not exist. Together they are the core LDI toolkit.",
[
"LDI",
"liability hedging",
"long tenors"
],
"A pension fund has to pay pensions that grow with inflation, and the value of these promises rises when rates fall. So it uses swaps that pay off in exactly those cases: receive inflation (gains when inflation rises) and receive fixed (gains when rates fall). Gains and losses offset.",
"Pension liabilities rise with inflation and are worth more when rates fall. Receiving inflation and receiving fixed makes the assets gain in exactly those cases, so the risks offset."
],
[
"Day 3",
"How can you create a synthetic inflation-linked bond?",
"Buy a nominal bond and enter a pay-fixed inflation swap: you swap the fixed inflation compensation built into the nominal yield for realised inflation. Conversely, an inflation-linked bond plus a receive-fixed swap strips out inflation and leaves pure real yield exposure.",
[
"nominal bond + swap",
"real yield"
],
"An inflation-linked bond pays more when inflation rises. To create one yourself: buy a normal fixed-coupon bond and enter an inflation swap where you pay fixed and receive real inflation. Together they behave like an inflation-linked bond.",
"Buy a nominal bond and enter an inflation swap where you pay fixed and receive inflation. Together they behave like an inflation-linked bond."
],
[
"Day 3",
"Bond futures vs interest rate swaps for managing duration?",
"Futures are standardised, exchange-traded and centrally cleared – no counterparty risk, daily variation margin, low cost and fast – so they suit short-term tactical duration changes. Swaps are bilateral (counterparty risk, ISDA documentation) but can be tailored to any maturity and notional, so they suit long-dated structural hedges such as pension liabilities.",
[
"tactical vs structural",
"cleared",
"tailored"
],
"Futures = standard contracts traded on an exchange (giełda), cheap and fast, with no risk that the other side won't pay → good for quick, short-term changes. Swaps = private contracts with a bank, can be tailored to any amount and date, but the bank could fail (counterparty risk) → good for long-term protection.",
"Futures are standardised, exchange-traded and cheap, with no counterparty risk, so they suit quick tactical changes. Swaps are bilateral and customisable, so they suit long-term hedges, but they carry counterparty risk."
],
[
"Day 3",
"How do bond futures work (margin, delivery, price)?",
"The buyer agrees to buy the reference bond at the futures price on delivery; positions are leveraged via initial margin and marked to market daily (variation margin), so losses can't accumulate. Few contracts are delivered; if they are, the short delivers the cheapest-to-deliver bond from a basket. Futures price ≈ spot × (1 + r)^t − carry (cost of carry).",
[
"variation margin",
"CTD",
"cost of carry"
],
"A bond future is a contract to buy a bond later at a price agreed today. You only pay a small deposit (margin, depozyt zabezpieczający), and gains and losses are settled every day. Almost nobody actually takes the bond; most close the contract before the end.",
"You agree today to buy a bond at a set future price. You post initial margin, and gains and losses are settled daily (variation margin). Few contracts are delivered; if they are, the seller delivers the cheapest-to-deliver bond."
],
[
"Day 3",
"What are swaptions, caps and floors?",
"A <b>payer swaption</b> is the right to enter a swap paying fixed at a set rate in the future (receiver = right to receive fixed) – used to hedge duration and liability risk. A <b>cap</b> is a series of calls on a floating rate, paying when the rate exceeds the strike – hedges floating-rate debt. A <b>floor</b> is a series of puts, paying when the rate falls below the strike – guarantees a minimum return on floating assets.",
[
"right not obligation",
"cap = calls",
"floor = puts"
],
"An option = a right, not an obligation. A swaption = the right to enter a swap (fixed vs floating exchange) later. A cap = insurance that pays if a floating rate goes above a limit, e.g. 5% (protects borrowers). A floor = pays if the rate falls below a limit, e.g. 2% (protects lenders).",
"A swaption is the right to enter a swap later. A cap pays when the floating rate rises above a strike and protects borrowers. A floor pays when the rate falls below a strike and protects lenders."
],
[
"Day 3",
"What problem does securitisation solve?",
"Banks originate loans that are illiquid and tie up capital on their balance sheet. Securitisation pools many loans and sells securities backed by their cash flows to investors, so the bank recycles capital and can lend more. Investors gain access to asset classes (mortgages, consumer credit) and diversification they could not buy otherwise.",
[
"illiquid loans",
"recycle capital",
"access"
],
"A bank has lots of loans (mortgages, car loans…). They tie up its money and can't be sold. Securitisation (sekurytyzacja) = the bank packs many loans together and sells them to investors as one tradeable security. The bank gets cash back and can give new loans.",
"Loans are illiquid and tie up the bank's capital. Securitisation pools them and sells them as tradeable securities, so the bank gets cash and can lend again, and investors get access to new assets."
],
[
"Day 3",
"What is an SPV and why is 'bankruptcy-remote' essential?",
"A special purpose vehicle is a legally separate shell (no employees) that buys the loan pool in a true sale and issues the ABS. Because it is bankruptcy-remote, the originator's creditors can't reach the loans if the bank fails. Investors therefore bear the risk of the asset pool, not the bank – which lets a BBB-rated bank issue AAA-rated securities.",
[
"true sale",
"ring-fenced",
"asset quality not issuer"
],
"In securitisation (packing loans into a security), the bank sells its loans to a separate company called an SPV (special purpose vehicle, spółka celowa). Bankruptcy-remote means that if the bank goes bankrupt, the bank's creditors can't take those loans. So investors only worry about the loans, not about the bank.",
"An SPV is a separate legal entity that buys the loans. Bankruptcy-remote means the bank's creditors cannot touch the assets if the bank fails, so investors bear only the risk of the loans, not of the bank."
],
[
"Day 3",
"Describe the steps of a securitisation.",
"<b>Warehousing:</b> loans are originated and funded on a short-term credit line. <b>Structuring:</b> an arranger designs the deal and sets up the SPV. <b>Issuance:</b> the SPV sells ABS notes to investors. <b>Purchase:</b> the SPV pays the originator and takes legal title. <b>Servicing:</b> a servicer (often the originator) collects payments and passes them to investors.",
[
"warehouse",
"arranger",
"SPV",
"servicer"
],
"Securitisation in steps: 1) A bank gives loans. 2) It sells them to an SPV (a separate company). 3) The SPV splits the pool into tranches (transze = slices with different risk). 4) Rating agencies grade each slice. 5) The slices are sold to investors. 6) Loan repayments flow to investors in a fixed order (the waterfall).",
"The originator makes loans, sells them to an SPV, the SPV tranches the pool, the tranches are rated and sold to investors, and borrower payments flow to investors through the waterfall."
],
[
"Day 3",
"Why is a pass-through structure not enough – what does tranching add?",
"In a pass-through every investor holds the same pro-rata share, so all bear the same average loss and the structure can't serve investors with different risk appetites. Tranching splits the pool into layers by seniority: losses hit the bottom first, so the same pool produces a near-riskless senior note for money funds and a high-risk junior piece for hedge funds, funding the pool more efficiently.",
[
"same risk for all",
"layers",
"different investors"
],
"Pass-through = the money from a pool of loans is simply passed on to all investors equally, so everyone has the same risk. Not everyone wants that. Tranching (dzielenie na transze) splits the pool into slices: senior (safest, paid first), mezzanine (middle) and equity (riskiest, takes losses first). Each investor picks the risk they want.",
"A pass-through gives every investor the same share of risk. Tranching creates senior, mezzanine and equity slices with different risk and return, so each investor chooses the risk they want."
],
[
"Day 3",
"Explain the waterfall and subordination.",
"Cash flows go top-down: senior is paid in full before mezzanine, then junior, then equity gets what is left. Losses go bottom-up: equity absorbs the first losses, then mezzanine, and senior only after everything below is wiped out. The protection from the tranches below is subordination – the thicker the junior layers, the more losses senior can withstand.",
[
"cash top-down",
"losses bottom-up",
"subordination"
],
"A pool of loans is split into slices (tranches): senior on top, mezzanine in the middle, equity at the bottom. Losses start at the bottom: first equity, then mezzanine, then senior. Money is paid from the top: senior first, equity gets what's left. Subordination (podporządkowanie) = the lower slices protect the higher ones.",
"Losses hit equity first, then mezzanine, then senior; cash is paid to senior first. The junior tranches below a tranche protect it (subordination)."
],
[
"Day 3",
"Why can a senior tranche be rated AAA when the pool is BBB?",
"Because of subordination: a 70% senior tranche only loses money if pool losses exceed 30%, the combined size of the tranches below it, which is very unlikely if defaults are not highly correlated. Rating agencies model default probability, timing and correlation, plus credit enhancement (overcollateralisation, reserve funds). In 2008 correlation proved far higher than assumed, so AAA tranches suffered losses.",
[
"subordination",
"correlation",
"credit enhancement"
],
"BBB = a medium-quality rating; AAA = the best. The senior (top) slice of a loan pool only loses money after all the slices below it are wiped out, e.g. after losses of more than 30%. A pool of BBB loans rarely loses that much unless everything defaults at once, so the senior slice can be rated AAA.",
"The junior tranches absorb losses first, so the senior tranche loses only after very large pool losses. That is unlikely unless defaults are highly correlated, so it can be rated AAA."
],
[
"Day 3",
"What went wrong with ABS ratings in 2008?",
"Agencies assumed low default correlation – that mortgages in different regions would not fail together – based on historical data. When house prices fell nationally, defaults became highly correlated and losses far exceeded model predictions, so AAA senior tranches took severe losses. It was a failure of the correlation assumption, not of the waterfall; investors had also relied on ratings instead of their own analysis.",
[
"correlation",
"national house price fall",
"over-reliance on ratings"
],
"ABS = asset-backed securities: securities made from a pool of loans (e.g. mortgages). Before 2008, rating agencies assumed that mortgages would not all default at the same time. But when house prices fell across the whole US, they did. The agencies were also paid by the issuers and used bad models. So 'AAA' slices lost money.",
"Ratings assumed low correlation between defaults, but falling house prices caused defaults everywhere at once. Add conflicts of interest and bad models, and AAA tranches suffered losses."
],
[
"Day 3",
"Why might a bank fund itself with ABS instead of a corporate bond?",
"A corporate bond is priced off the bank's own rating and adds to its liabilities. ABS separates asset quality from issuer quality, so a BBB bank can fund a good mortgage pool at AAA spreads on the senior tranche – often a cheaper blended cost. It also moves assets off balance sheet (frees regulatory capital), transfers credit risk (5% retained) and reaches different investor bases.",
[
"cheaper funding",
"off balance sheet",
"risk transfer"
],
"ABS = securities made from a pool of the bank's loans. If the loans are good, the ABS can get a better rating than the bank itself, so investors accept a lower interest rate → cheaper funding for the bank. The loans also leave the bank's balance sheet, so it needs less capital.",
"ABS can get a higher rating than the bank itself, so funding is cheaper. The loans also move off the balance sheet, which frees regulatory capital."
],
[
"Day 3",
"Why do investors buy ABS?",
"Yield pickup over government and often comparably rated corporate bonds – compensation for complexity and illiquidity rather than more credit risk. Diversification across thousands of borrowers, access to asset classes not available as plain bonds, and predictable amortising cash flows that suit insurers and pension funds for liability matching.",
[
"yield",
"diversification",
"access",
"liability matching"
],
"ABS = securities made from pools of loans (mortgages, car loans, credit cards…). Investors like them because they pay more than other bonds with the same rating, give access to new types of loans, let you choose your risk by picking a slice (tranche), and spread risk (diversification).",
"Higher yield than similarly rated bonds, access to new asset types, a choice of risk through tranches, and diversification."
],
[
"Day 3",
"What are the main dangers of securitisation?",
"Complexity and opacity, so investors relied on ratings; moral hazard – in the originate-to-distribute model the originator no longer bears the consequences of poor lending, so standards fall (hence the 5% risk retention rule); ratings failures; and systemic risk – securitisation amplifies booms and busts and spreads stress quickly through interconnected institutions.",
[
"opacity",
"moral hazard",
"risk retention",
"systemic"
],
"Securitisation = packing loans into securities and selling them. Dangers: a bank that sells its loans on doesn't care much about their quality (it's no longer its problem); the products are complex and hard to understand; ratings can be wrong; and the risk spreads through the whole financial system.",
"Weak lending standards (originate to distribute), complexity and opacity, rating failures, and risk spreading across the whole system."
],
[
"Day 3",
"What makes MBS different from plain bonds?",
"US mortgages are 30-year fixed-rate, amortising loans with a free prepayment option, which for the lender is a short call on rates. Cash flows therefore depend on interest rates: when rates fall borrowers refinance (contraction risk), when rates rise they hold on (extension risk). This creates negative convexity, plus credit risk depending on pool and tranche.",
[
"prepayment option",
"contraction",
"extension"
],
"MBS = mortgage-backed securities: securities made from a pool of home loans (mortgages, kredyty hipoteczne). Homeowners can repay early (prepayment), e.g. when rates fall and they refinance. So you don't know when you'll get your money back. With a normal bond you do.",
"MBS cash flows are uncertain because homeowners can prepay, especially when rates fall and they refinance. The investor is effectively short a call option."
],
[
"Day 3",
"Explain contraction and extension risk.",
"<b>Contraction:</b> rates fall → borrowers refinance → principal comes back early → the investor must reinvest at lower rates and misses the price gain. <b>Extension:</b> rates rise → prepayment slows → the MBS's life and duration extend → the investor is stuck with a below-market rate and suffers a bigger price loss. Both work against the investor.",
[
"rates fall",
"rates rise",
"both hurt"
],
"MBS = securities made from home loans; homeowners can repay early. Contraction risk: rates fall → people repay early → you get your money back just when you can only reinvest at low rates. Extension risk: rates rise → nobody repays early → your money is stuck longer at the old low rate.",
"Contraction risk: rates fall, prepayments speed up, and cash returns when it can only be reinvested at low rates. Extension risk: rates rise, prepayments slow, and the investor is stuck longer in a low-yielding asset."
],
[
"Day 3",
"Why do MBS have negative convexity?",
"Because the borrower can prepay: when rates fall the MBS shortens and its price gain is capped, and when rates rise it lengthens and loses more than a plain bond. So it underperforms a comparable-duration plain bond in both directions – the same logic as a callable bond, where the borrower holds the call.",
[
"capped upside",
"extended downside"
],
"MBS = securities made from home loans. Normal bond: rates fall → price rises a lot. MBS: rates fall → people repay early → the price barely rises. Rates rise → the price falls normally. Small gains, full losses = negative convexity (the price–rate curve bends against you).",
"When rates fall, prepayments cap the price gain; when rates rise, the price falls normally. Limited upside with full downside is negative convexity."
],
[
"Day 3",
"IO vs PO strips – how do they react to rates?",
"Stripping separates interest (IO) and principal (PO); together they equal the original MBS. The <b>IO</b> gains when rates rise, because slower prepayment means interest is paid on a larger balance for longer – useful to hedge a long-duration portfolio or bet on rising rates. The <b>PO</b>, bought at a discount, gains when rates fall, because principal comes back sooner.",
[
"IO up when rates up",
"PO up when rates down",
"opposite"
],
"A mortgage payment = interest + principal (the borrowed amount, kapitał). IO (interest only) gets only the interest; PO (principal only) gets only the principal. Rates fall → people repay early → future interest disappears → IO loses. PO gets its money sooner → PO gains. They move in opposite directions.",
"IO receives only interest: when rates fall, prepayments rise and interest disappears, so IO loses value. PO receives only principal: faster prepayment means cash arrives sooner, so PO gains. They react in opposite ways."
],
[
"Day 3",
"What is a sequential-pay CMO and what does it achieve?",
"Principal from the mortgage pool is paid to tranche A until it is retired, then B, then C, then Z; interest is paid to all tranches throughout. The same pool thus produces short (A, for money funds), medium (B, C) and long (Z, for pension funds and insurers) average lives. Prepayment risk is redistributed, not eliminated.",
[
"sequential principal",
"different average lives"
],
"A CMO (collateralised mortgage obligation) is a pool of home loans split into slices. In a sequential-pay CMO, repaid principal (borrowed amount) goes first only to slice A until it's fully repaid, then to B, then to C. So A is short-term, C is long-term, and each investor gets the length they want.",
"All principal goes to tranche A until it is repaid, then to B, then to C. This creates short, medium and long tranches from one pool, so investors pick the maturity they want."
],
[
"Day 3",
"CLO vs CDO?",
"A <b>CLO</b> is backed by an actively managed portfolio of leveraged loans to sub-investment-grade companies; senior tranches can still be AAA thanks to tranching and overcollateralisation – today the largest structured credit market. A <b>CDO</b> is backed by bonds, MBS tranches or other ABS; CDOs of subprime MBS were at the centre of 2008, and cash CDOs largely disappeared afterwards. (Slide 54 swaps the headers.)",
[
"leveraged loans",
"ABS of ABS",
"2008"
],
"Both are pools split into slices (tranches). A CLO (collateralised loan obligation) holds loans to heavily indebted companies (leveraged loans), usually with floating rates, and a manager actively manages them. A CDO (collateralised debt obligation) holds bonds or other loan-backed securities, like the mortgage CDOs of 2008.",
"A CLO pools leveraged loans, usually floating-rate and actively managed. A CDO pools bonds or other ABS, as the mortgage CDOs of 2008 did."
],
[
"Day 3",
"How is a swap rate set at inception, and what happens if the curve then changes?",
"A single spot curve, seen as a series of 1-year forwards, gives the expected floating payments; the swap rate is the fixed coupon that makes PV(fixed) = PV(floating), so the swap starts at zero value – it equals the par yield. If forwards are realised the fixed payer first pays and later receives, net PV zero. If the curve flattens (future SOFR below the forwards), the fixed payer loses; if it steepens, the fixed receiver loses.",
[
"PV fixed = PV float",
"forwards",
"par yield"
],
"In a swap (fixed vs floating exchange), the fixed rate at the start is set so that both sides are worth the same: the swap is worth 0. Later, if rates rise, the fixed payer gains (they now get more floating) and the fixed receiver loses.",
"The swap rate is set so the fixed and floating legs have equal value, so the swap starts at zero. If rates then rise, the fixed payer gains; if they fall, the fixed receiver gains."
],
[
"Day 3",
"What types of ABS exist?",
"MBS (residential RMBS or commercial CMBS mortgages – the largest sector), auto ABS (car loans, short average life, low defaults, liquid), credit card ABS (revolving receivables, no fixed maturity), CLOs (leveraged loans) and CDOs (bonds or ABS), plus student loans, aircraft or equipment leases and royalties – any predictable cash flow can be securitised.",
[
"MBS",
"auto",
"credit card",
"CLO/CDO"
],
"ABS = asset-backed securities: any pool of loans packed into a tradeable security. Types: MBS (home loans, the biggest), car loans, credit card debt, CLOs (company loans), CDOs (bonds), student loans and leases. Anything with predictable payments can be packed.",
"MBS (the largest), auto loans, credit cards, CLOs, CDOs, student loans and leases. Any predictable cash flow can be securitised."
],
[
"Day 3",
"How are fixed income options priced? (interest rate models)",
"Options have uncertain payoffs, so they need a model of how rates evolve, not just today's curve. Models range from a static curve fit, to a stochastic process for rates, to a rate tree (lattice) on which cash flows are valued backwards. That is why option-embedded bonds and OAS require more than simple discounting.",
[
"static curve",
"stochastic process",
"tree"
],
"An option's value depends on how interest rates move in the future, and nobody knows that. So you need a model that draws many possible future paths of rates (e.g. a tree, drzewo dwumianowe) and values the option on each path.",
"Option payoffs depend on future rates, so you need a model of how rates evolve, such as a rate tree, not just today's curve."
],
[
"Day 3",
"Who uses bond futures and for what?",
"Asset managers for fast, cheap tactical duration changes (buy futures to lengthen, sell to shorten; off-balance-sheet). Banks and dealers to hedge rate risk of loan portfolios and bond inventory. Hedge funds for directional and timing views (e.g. long 2Y before an expected cut) and curve trades (long 2Y / short 10Y = steepener). Futures are often more liquid than cash bonds, especially in stress.",
[
"tactical",
"hedging inventory",
"curve trades"
],
"Bond futures = cheap, standard exchange contracts on bonds. Fund managers use them to quickly change how sensitive their portfolio is to rates (duration). Banks use them to protect against rate changes. Hedge funds use them to bet on rates or on the shape of the yield curve.",
"Asset managers use them to change duration quickly and cheaply, banks and dealers to hedge rate risk, and hedge funds to bet on rates or the shape of the curve."
],
[
"Day 4",
"Why must the money stock grow, and what questions does that raise?",
"The money stock is the total money in circulation and changes as money is created and destroyed. It needs to grow because interest must be paid (money that doesn't exist when a loan is made), and population, the economy and new ideas need capital. This raises the key questions: who may create money, who receives it, through what mechanism and how much.",
[
"interest",
"growth",
"who creates it"
],
"The money stock = all the money in the economy. It must grow, because borrowers must pay interest (money that doesn't exist yet when the loan is made), and the population and economy keep growing. That raises questions: who may create money, who gets it first, and how much.",
"The money stock must grow because interest must be paid and the economy and population grow. The key questions are who creates money, who receives it, how and how much."
],
[
"Day 4",
"How do payments between banks settle?",
"Every payment between customers of different banks settles across the banks' reserve accounts at the central bank. Banks with surplus reserves lend overnight to banks with shortfalls in the interbank market at the Fed Funds rate – which is why the quantity of reserves determines that rate.",
[
"reserve accounts",
"interbank market",
"Fed Funds"
],
"Every bank has an account at the central bank; the money in it is called reserves (rezerwy). When you send money to someone at another bank, reserves move from your bank's account to theirs. Banks short of reserves borrow them overnight from other banks, at the Fed Funds rate.",
"Interbank payments settle between banks' reserve accounts at the central bank. Banks short of reserves borrow overnight from banks with a surplus, at the Fed Funds rate."
],
[
"Day 4",
"Where do banks get their funding?",
"Customer deposits (savings, checking, term – cheapest and most stable), interbank borrowing (short-term liquidity), wholesale funding markets (commercial paper, repo, short-term bills – large amounts) and central bank facilities (standing facilities, lender of last resort, emergency programmes). On a typical balance sheet deposits are about 62% of liabilities and equity about 10%; loans are about 53% of assets.",
[
"deposits",
"interbank",
"wholesale",
"central bank"
],
"Customer deposits (cheapest and most stable, about 62% of what banks owe), loans from other banks, the wholesale market (repo = loans secured by bonds, and commercial paper = short IOUs), and the central bank in an emergency.",
"Customer deposits (the cheapest and most stable, about 62% of liabilities), interbank borrowing, wholesale markets (repo, commercial paper) and central bank facilities."
],
[
"Day 4",
"Summarise the financial system in a nutshell.",
"The <b>central bank</b> issues base money, sets the short rate and is lender of last resort. <b>Commercial banks</b> take deposits and create money by lending, under capital rules and deposit insurance. <b>Money market funds</b> pool short-term savings and lend via repo. <b>Dealers</b> make markets funded by repo. <b>Asset managers</b> invest for pension funds, insurers and retail – dominant bond buyers. <b>Hedge funds</b> use leverage and amplify both liquidity and volatility.",
[
"central bank",
"banks",
"MMFs",
"dealers",
"asset managers",
"hedge funds"
],
"The central bank creates base money and sets interest rates. Commercial banks create money by lending. Money market funds collect short-term savings and lend them out briefly. Dealers buy and sell securities. Asset managers invest for pension funds and savers. Hedge funds invest with borrowed money (leverage, dźwignia).",
"The central bank issues base money and sets rates; banks create money by lending; money market funds lend via repo; dealers make markets; asset managers invest for savers; hedge funds use leverage."
],
[
"Day 4",
"How has money evolved, and what is fiat money?",
"First money was a commodity (gold, silver), limited by mining. Then paper money backed by gold, with banks holding only fractional reserves (from 1600s goldsmiths). Today money is fiat – a pure liability of the issuer with no commodity backing, created by decree – so its quantity is a policy choice, not a physical constraint.",
[
"commodity",
"backed",
"fiat",
"policy choice"
],
"Money started as goods (e.g. salt), then gold, then paper you could swap for gold. Today's money is fiat money (pieniądz fiducjarny): nothing backs it; it has value because the state says so and people trust it.",
"Money evolved from commodities to gold to gold-backed paper. Fiat money is backed by nothing physical; it has value because of law and trust in the issuer."
],
[
"Day 4",
"Why did the Bretton Woods system end?",
"From 1944, 44 currencies were pegged to the dollar and the dollar was convertible into gold at $35/oz for foreign central banks (the IMF was also created). The US issued more dollars than its gold could back to finance the Vietnam War and Great Society programmes, and France demanded gold. In 1971 Nixon closed the gold window – currencies became fiat with floating exchange rates.",
[
"$35/oz",
"Vietnam",
"1971 Nixon",
"floating rates"
],
"Bretton Woods (1944–1971): the dollar could be exchanged for gold, and other currencies were fixed to the dollar. The US printed more dollars than it had gold (Vietnam War, spending), so in 1971 Nixon stopped the exchange to gold and the system ended.",
"The US printed more dollars than its gold could back, other countries demanded gold, and in 1971 Nixon ended convertibility, which ended the system."
],
[
"Day 4",
"What is the difference between base money and credit money?",
"Base money is created by the central bank – currency plus bank reserves – and is the ultimate settlement asset, the role gold once played. Credit money is created by commercial banks when they lend and exists as deposits. Roughly 90% of money is credit money.",
[
"central bank",
"commercial banks",
"90%"
],
"Base money = cash and banks' reserves (money banks keep at the central bank); only the central bank creates it. Credit money = the money in your bank account; a commercial bank creates it when it gives a loan. Most money is credit money.",
"Base money (cash and reserves) is created by the central bank. Credit money (bank deposits) is created by commercial banks when they lend, and it is most of the money supply."
],
[
"Day 4",
"How do commercial banks create money, and what limits it?",
"A loan creates a deposit at the same moment: loan receivable +100k and customer deposit +100k – the money did not exist before. Repayment destroys it again. Limits: demand from creditworthy borrowers (lower when rates are high) and regulation – capital, leverage and liquidity rules.",
[
"loan creates deposit",
"repayment destroys",
"limits"
],
"When a bank gives you a loan, it simply writes the money into your account; it doesn't take it from someone else. That is new money. Limits: rules on how much capital (own money) banks must hold, how many people want loans, the risk of the borrowers, and the central bank's interest rate.",
"When a bank lends, it creates a new deposit, which is new money. Limits are capital requirements, demand for loans, credit risk and the central bank's interest rate."
],
[
"Day 4",
"What are the main functions of a commercial bank?",
"<b>Lending</b> – allocating capital and monitoring borrowers (the main way new money enters the economy). <b>Maturity transformation</b> – funding long-term loans with short-term deposits. <b>Liquidity provision</b> – turning illiquid loans into deposits withdrawable on demand. <b>Risk transformation</b> – diversifying credit risk, with equity and deposit insurance absorbing losses.",
[
"maturity transformation",
"liquidity",
"risk"
],
"A commercial bank takes deposits, gives loans, handles payments, turns short-term deposits into long-term loans (maturity transformation, transformacja terminów) and checks whether borrowers are safe.",
"Taking deposits, lending, running payments, maturity transformation (short deposits into long loans) and assessing credit risk."
],
[
"Day 4",
"Liquidity risk vs solvency risk of a bank?",
"<b>Liquidity risk:</b> not enough liquid assets to meet withdrawals or short-term obligations – a bank run can bring down even a solvent bank. <b>Solvency risk:</b> loan losses exceed equity so liabilities exceed assets. Forced sales at depressed prices can turn a liquidity problem into a solvency one. (Day 4 slide 13 swaps the headers.)",
[
"bank run",
"losses exceed capital",
"fire sales"
],
"Liquidity risk: the bank owns enough, but lacks cash today (e.g. everyone withdraws at once = a bank run). Solvency risk (wypłacalność): the bank owns less than it owes; its own money (capital) is gone. The central bank can lend cash to fix the first, not the second.",
"Liquidity risk: the bank is solvent but lacks cash today, e.g. in a bank run. Solvency risk: assets are worth less than liabilities. A central bank can fix liquidity, not solvency."
],
[
"Day 4",
"Which regulations address bank risks?",
"Capital requirements (Basel III, minimum capital vs risk-weighted assets) and the leverage ratio (Tier 1 capital vs total assets, regardless of risk weights) address solvency. The Liquidity Coverage Ratio and Net Stable Funding Ratio address short- and long-term liquidity. Reserve requirements were historically for liquidity but were abandoned in the US in 2020.",
[
"Basel III",
"leverage ratio",
"LCR",
"NSFR"
],
"Against solvency (owning less than you owe): capital requirements (Basel III, banks must hold enough own money) and the leverage ratio (own money vs total assets). Against liquidity (running out of cash): the LCR (enough cash for 30 days of stress) and the NSFR (stable long-term funding). The US stopped requiring reserves in 2020.",
"Capital requirements (Basel III) and the leverage ratio address solvency; the LCR and NSFR address liquidity. The US abolished reserve requirements in 2020."
],
[
"Day 4",
"What is a central bank and what is the Fed's mandate?",
"An independent institution, operating within a legal mandate, whose main task is monetary policy; independence shields it from short-term political pressure. It deals only with commercial banks, never directly with the public. The Fed's dual mandate is maximum employment and stable prices – the two can conflict, since fighting inflation can mean higher unemployment.",
[
"independent",
"banks only",
"dual mandate"
],
"A central bank is the bank for banks: it issues money, sets interest rates and lends to banks in a crisis (lender of last resort, pożyczkodawca ostatniej instancji). The Fed (US central bank) has two goals: stable prices (low inflation) and maximum employment.",
"The central bank issues base money, sets short-term rates and is lender of last resort. The Fed's dual mandate is price stability and maximum employment."
],
[
"Day 4",
"How does the Fed steer the Fed Funds rate?",
"The Fed Funds rate is the overnight unsecured interbank rate for reserves – a market rate, not set by decree. The Fed controls the quantity of reserves through open market operations: buying securities pays banks with new reserves, more reserves push the rate down; selling securities drains reserves and pushes it up. All other rates are priced as spreads over this benchmark.",
[
"reserves",
"open market operations",
"benchmark"
],
"Open market operations: the Fed buys or sells government bonds. When it buys, it pays banks with reserves (money at the Fed) → banks have plenty → they lend to each other cheaply → the Fed Funds rate falls. When it sells, it takes reserves away → the rate rises.",
"Through open market operations: buying securities adds reserves and pushes the Fed Funds rate down; selling removes reserves and pushes it up."
],
[
"Day 4",
"Besides open market operations, what tools does the Fed have?",
"<b>Interest on reserves</b> – sets a floor under the Fed Funds rate when reserves are abundant. <b>Forward guidance</b> – communication that shapes expectations of future policy. <b>Quantitative easing</b> – large purchases of long-term bonds/MBS when rates are near zero (2008, 2020). <b>Discount window</b> – lender of last resort against collateral, priced above target and carrying stigma.",
[
"IORB",
"forward guidance",
"QE",
"discount window"
],
"Interest on reserves: the Fed pays banks interest on money held at the Fed, which sets a floor for rates. Forward guidance: the Fed tells the market what it plans to do. QE (quantitative easing): buying lots of long-term bonds when rates are already near zero. The discount window: emergency loans to banks.",
"Interest on reserves, forward guidance, quantitative easing and the discount window."
],
[
"Day 4",
"How does a Fed rate cut reach mortgage rates?",
"The Fed only acts on banks: a lower target lowers banks' funding costs, so the prime rate and short-term loan rates fall quickly, deposit rates more slowly. But 30-year mortgage rates depend on expected future short rates, not today's overnight rate, so they move mainly through forward guidance and directly through QE purchases of Treasuries and MBS. That's why mortgage rates react to QE more than to Fed Funds moves.",
[
"banks' funding cost",
"short end",
"forward guidance",
"QE"
],
"The Fed cuts its rate → banks borrow from each other more cheaply → short-term rates fall → markets expect more cuts → long-term government bond rates fall → mortgage rates (home loan rates), which follow the 10-year government rate, fall.",
"A Fed cut lowers short rates and expectations of future rates, which pulls down long-term Treasury yields, and mortgage rates follow them down."
],
[
"Day 4",
"What are money markets?",
"Markets for short-term debt (under one year), traded OTC, used by banks, firms and governments to manage cash. They are highly liquid and low-risk, and their rates track the Fed Funds rate (the short end of the curve). Instruments: T-bills, commercial paper, certificates of deposit, Fed Funds and repo.",
[
"< 1 year",
"liquid",
"instruments"
],
"Money markets are markets for very short loans, under one year: T-bills (short government bonds), repo (loans secured by bonds) and commercial paper (short company IOUs). Banks and firms use them to park spare cash or to borrow briefly.",
"Money markets trade short-term debt under one year (T-bills, repo, commercial paper) and are used to manage liquidity."
],
[
"Day 4",
"What is a repo and why is it structured as a sale?",
"The borrower sells securities for cash and agrees to repurchase them at a set price and date; the price difference is the repo rate. Economically it is a collateralised loan, mostly overnight (~$5T a day in the US). It is structured as a sale so the lender owns the collateral outright and can sell it immediately if the borrower defaults, without a bankruptcy queue.",
[
"sell and repurchase",
"collateral",
"no bankruptcy queue"
],
"A repo (repurchase agreement): you sell a bond today and agree to buy it back tomorrow at a slightly higher price. In practice it is a loan with the bond as security (collateral, zabezpieczenie). It's done as a sale so that if the borrower fails, the lender already owns the bond and can sell it at once.",
"A repo is a sale of a bond with an agreement to buy it back later at a higher price, which makes it a collateralised loan. Structuring it as a sale lets the lender keep and sell the collateral immediately if the borrower defaults."
],
[
"Day 4",
"Who participates in the repo market?",
"<b>Asset holders</b> (e.g. money market funds) lend cash and take Treasuries as collateral. <b>Securities dealers</b> borrow that cash and lend it on to <b>leveraged investors</b> (hedge funds), earning the spread. Hedge funds use repo to fund positions larger than their own capital.",
[
"MMFs",
"dealers",
"hedge funds"
],
"Repo = a short loan secured by a bond. Cash lenders: money market funds, banks and companies with spare cash. Cash borrowers: dealers and hedge funds, who use the loans to finance the bonds they hold.",
"Cash lenders: money market funds, banks and corporates. Cash borrowers: dealers and hedge funds, who finance their bond positions."
],
[
"Day 4",
"SOFR vs Fed Funds?",
"Fed Funds is the unsecured overnight rate at which banks lend reserves to each other, so it includes the borrowing bank's credit risk. SOFR is computed from overnight repo secured by Treasuries, so it is closer to risk-free. SOFR replaced LIBOR as the benchmark for USD loans and derivatives. (Day 4 slide 29 swaps the headers.)",
[
"unsecured",
"secured",
"replaced LIBOR"
],
"Fed Funds rate = the rate at which banks lend reserves to each other overnight WITHOUT security, so it includes some bank risk. SOFR = the rate on overnight loans secured by US government bonds (repo), so it is almost risk-free. SOFR replaced LIBOR (an old benchmark rate) as the main reference rate.",
"Fed Funds is unsecured interbank lending, so it includes bank credit risk. SOFR comes from overnight repo secured by Treasuries, so it is almost risk-free. SOFR replaced LIBOR."
],
[
"Day 4",
"What are non-bank intermediaries ('shadow banks')?",
"Institutions such as private credit funds, hedge funds, money market funds and SPVs that channel savings into credit outside the regulated banking system. They cannot create money – they lend investors' funds, often leveraged with repo or commercial paper – and have no deposit insurance, so investors bear the risk directly. Less regulation lets them serve riskier borrowers and longer lock-ups.",
[
"no money creation",
"no deposit insurance",
"less regulated"
],
"Non-bank intermediaries ('shadow banks', system bankowości równoległej) lend money but are not banks: private credit funds, hedge funds, money market funds. They can't create money (they lend investors' money), they are less regulated, and there is no deposit guarantee.",
"Non-banks such as private credit funds, hedge funds and money market funds that lend outside the regulated banking system. They don't create money, are less regulated, and have no deposit insurance."
],
[
"Day 4",
"Money market funds – role and risk?",
"Pooled funds investing in T-bills, commercial paper and repo, redeemable on demand, used by firms and institutions like a bank account with higher yields. They are major cash lenders in repo. Risk: no deposit insurance – in stress the NAV can fall below $1, as in 2008.",
[
"T-bills, CP, repo",
"no insurance",
"break the buck"
],
"A money market fund collects short-term savings and lends them out briefly (repo, T-bills). People treat it like a bank account, but there is no guarantee. Risk: everyone wants their money back at once (a run), as in 2008.",
"Money market funds pool short-term savings and lend in money markets. Investors treat them like deposits, but there is no insurance, so they are exposed to runs (as in 2008)."
],
[
"Day 4",
"What do securities dealers do and why are they a systemic risk?",
"They underwrite new securities, make markets in bonds and derivatives, and act as prime brokers to hedge funds. They fund themselves mainly with overnight repo and are highly leveraged, so small asset moves can wipe out equity. When their balance sheets contract, market liquidity can disappear quickly.",
[
"market making",
"repo funded",
"leverage"
],
"Dealers help companies and governments sell new bonds and constantly buy and sell securities so the market works. They borrow overnight (repo) and use a lot of borrowed money (leverage). When they get into trouble they stop trading, and suddenly nobody can buy or sell easily.",
"Dealers underwrite securities and make markets. They are funded by overnight repo and highly leveraged, so when they cut their balance sheets, market liquidity disappears."
],
[
"Day 4",
"Hedge funds and the GP/LP structure?",
"Hedge funds are pooled vehicles for institutional investors that use leverage (repo, prime brokers) for relative value, macro and credit strategies; they add liquidity normally but can amplify stress when leveraged positions unwind together. The <b>GP</b> manages the fund (≈2% management + 20% performance fee, unlimited liability); <b>LPs</b> provide capital with liability limited to what they invested.",
[
"leverage",
"GP manages",
"LP limited liability"
],
"A hedge fund is an investment fund for rich people and institutions that uses borrowed money (leverage) to boost returns. The GP (general partner) runs the fund, takes about 2% a year + 20% of profits, and is fully liable. The LPs (limited partners) give the money and can lose only what they put in.",
"Hedge funds are pooled vehicles that use leverage for various strategies. The GP manages the fund (about 2% + 20%) with unlimited liability; LPs provide capital with liability limited to their investment."
]
];
