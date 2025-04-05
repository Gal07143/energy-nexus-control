
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Energy-specific colors
				energy: {
					solar: '#f97316',      // Solar energy (orange)
					battery: '#3b82f6',    // Battery (blue)
					grid: '#8b5cf6',       // Grid power (purple)
					ev: '#0ea5e9',         // EV charging (light blue)
					consumption: '#64748b', // Home consumption (slate)
					saving: '#22c55e',     // Savings/positive (green)
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'flow': {
					'0%, 100%': { 
						strokeDashoffset: '100%' 
					},
					'50%': { 
						strokeDashoffset: '0%' 
					}
				},
				'pulse-opacity': {
					'0%, 100%': { 
						opacity: '0.6' 
					},
					'50%': { 
						opacity: '1' 
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'flow': 'flow 3s ease-in-out infinite',
				'pulse-opacity': 'pulse-opacity 2s ease-in-out infinite'
			},
			// Add stroke utilities for SVG
			strokeWidth: {
				'3': '3',
			},
			strokeDasharray: {
				'dash': '10 5',
			}
		}
	},
	plugins: [
		require("tailwindcss-animate"),
		// Add a plugin to handle SVG properties
		function({ addUtilities }) {
			const newUtilities = {
				'.fill-none': {
					'fill': 'none',
				},
				'.stroke-dasharray-dash': {
					'stroke-dasharray': '10 5',
				},
			};
			addUtilities(newUtilities, ['responsive']);
		}
	],
} satisfies Config;
