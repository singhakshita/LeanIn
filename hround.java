import java.util.*;
class hround{
    public static int solve(String s, String f){
       TreeSet<Character> ts = new TreeSet<Character>();
       for(int i=0;i<f.length();i++){
           ts.add(f.charAt(i));
       }
       ts.add('`');
       ts.add('{');
       
       int moves = 0;
       for(int i=0;i<s.length();i++){
         char ch = s.charAt(i);
         char p = ts.floor(ch);
         char n = ts.ceiling(ch);
        
         int min = Integer.MAX_VALUE;
         if(p >= 'a' && p <= 'z'){
             int direct = Math.abs(p-ch);
             int anti = Math.abs(ch - 'a') + Math.abs('z' - p);
            
             min = Math.min(direct, anti);
         } 
         if(n >= 'a' && n <= 'z'){
            int direct = Math.abs(n-ch);
            int anti = Math.abs(ch - 'a') + Math.abs('z' - n);
            int minN= Math.min(direct, anti);
           
            min = Math.min(minN, min);
         }
         moves += min;
       }
       return moves;
    }
   public static void main(String[] args) {
       Scanner scn = new Scanner(System.in);
       int t = scn.nextInt();
       for(int i=1;i<=t;i++){
          String s = scn.next();
          String f = scn.next();
          int n = solve(s, f);
          System.out.println("Case #"+i+": "+n);
       }

   }
}