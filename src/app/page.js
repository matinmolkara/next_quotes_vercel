
import Image from "next/image";
import styles from "./page.module.css";
import getAllQuotes from '@/lib/getAllQuotes'
import QuoteItem from "@/components/QuoteItem";

export default async function Home() {
  const userData  = getAllQuotes()
  const quotes = await userData
//const quotes = getAllQuotes()
// const quotes = await quotesData

// const quotes = [
//   {"q":"The purpose of life is to contribute in some way to making things better.","a":"Robert F. Kennedy","c":"73","h":"<blockquote>&ldquo;The purpose of life is to contribute in some way to making things better.&rdquo; &mdash; <footer>Robert F. Kennedy</footer></blockquote>"},
//   {"q":"You don't need anybody to tell you who you are or what you are. You are what you are!","a":"John Lennon","c":"85","h":"<blockquote>&ldquo;You don't need anybody to tell you who you are or what you are. You are what you are!&rdquo; &mdash; <footer>John Lennon</footer></blockquote>"},
//   {"q":"When you are able to employ your will always for constructive purposes, you become the controller of your destiny.","a":"Paramahansa Yogananda","c":"114","h":"<blockquote>&ldquo;When you are able to employ your will always for constructive purposes, you become the controller of your destiny.&rdquo; &mdash; <footer>Paramahansa Yogananda</footer></blockquote>"},
//   {"q":"As a matter of fact is an expression that precedes many an expression that isn't.","a":"Laurence J. Peter","c":"81","h":"<blockquote>&ldquo;As a matter of fact is an expression that precedes many an expression that isn't.&rdquo; &mdash; <footer>Laurence J. Peter</footer></blockquote>"},
//   {"q":"The difference between impossible and possible is a willing heart.","a":"Lolly Daskal","c":"66","h":"<blockquote>&ldquo;The difference between impossible and possible is a willing heart.&rdquo; &mdash; <footer>Lolly Daskal</footer></blockquote>"},
//   {"q":"Make failure your teacher, not your undertaker.  ","a":"Zig Ziglar","c":"49","h":"<blockquote>&ldquo;Make failure your teacher, not your undertaker.  &rdquo; &mdash; <footer>Zig Ziglar</footer></blockquote>"},
//   {"q":"If you try to get rid of fear and anger without knowing their meaning, they will grow stronger and return.","a":"Deepak Chopra","c":"106","h":"<blockquote>&ldquo;If you try to get rid of fear and anger without knowing their meaning, they will grow stronger and return.&rdquo; &mdash; <footer>Deepak Chopra</footer></blockquote>"}
// ]
  return (
    <main className={styles.main}>
        <div className={styles.wrapper}>
          <div className={styles.qoutesHolder}>
              <div className={styles.qoutesHolder0}>
                    <Image
                      src="/up.png"
                      alt="Quote Sign"
                      
                      width={80}
                      height={80}
                      
                    />
              </div>
              <div className={styles.qoutesHolder1}>
                
                <QuoteItem quotes={quotes}/>
                 
  
              </div>
              <div className={styles.qoutesHolder2}>
              <Image
                      src="/down.png"
                      alt="Quote Sign"
                      
                      width={80}
                      height={80}
                      
                    />
              </div>
          </div>
        </div>
        
    </main>
  );
}
