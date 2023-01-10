//1.
sum=(a=16,b=20,c=a+b/10)=>console.log(c);
sum();

//2.
sum1=(a=19+5*3-2+22/2+10)=>console.log(a);
sum1();

//3.
sum2=(a=12,b=23,c=(a+b)*2/5)=> c=c+a-b;
console.log(sum2());

//4.
num=(a=25,b=12,c=a*b)=>console.log(c);
num();

//5.
add=(x=12,y=6,z=x+y)=>{
    return z;
}
console.log(add(20));

//6.
add2=(x=12,y=20,z=x*y-y+x)=>{
    return z;
}
console.log(add2(undefined));

//7.
formula=(a=5,b=8,c=(a+b)**2)=>console.log(c);
formula();

//8.
formula2=(a=5,b=6,c=a**b + b**a)=> console.log(c);
formula2();

//9.
equv=(a,b,c,d=(a+b+c)**4)=>console.log(d);
equv(5,4,6);

//10.
equv1=(a,b,c=(a+b)*(a-b))=>console.log(c);
equv1(10,5);