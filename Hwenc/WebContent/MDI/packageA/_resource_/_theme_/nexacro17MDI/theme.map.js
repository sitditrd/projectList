(function()
{
	return function()
	{
		nexacro._setCSSMaps(
		{
			"MainFrame" :
			{
				"self" :
				{
					"enabled" :
					{
						"font" : nexacro.FontObject("normal 12px \"Verdana\"")
					},
					"disabled" :
					{
						"font" : nexacro.FontObject("normal 12px \"Verdana\"")
					},
					"deactivate" :
					{
						"font" : nexacro.FontObject("normal 12px \"Verdana\"")
					}
				}
			},
			"ChildFrame" :
			{
				"self" :
				{
					"disabled" :
					{
					},
					"deactivate" :
					{
					}
				}
			},
			"FrameSet" :
			{
				"self" :
				{
					"enabled" :
					{
						"font" : nexacro.FontObject("normal 12px \"Verdana\"")
					},
					"disabled" :
					{
						"font" : nexacro.FontObject("normal 12px \"Verdana\"")
					},
					"deactivate" :
					{
						"font" : nexacro.FontObject("normal 12px \"Verdana\"")
					}
				}
			},
			"TitleBarControl" :
			{
				"self" :
				{
					"enabled" :
					{
						"padding" : nexacro.PaddingObject("0px 0px 0px 8px"),
						"color" : nexacro.ColorObject("#ffffff")
					},
					"disabled" :
					{
						"padding" : nexacro.PaddingObject("0px 0px 0px 8px"),
						"color" : nexacro.ColorObject("#ffffff")
					},
					"deactivate" :
					{
						"padding" : nexacro.PaddingObject("0px 0px 0px 8px"),
						"color" : nexacro.ColorObject("#ffffff")
					}
				}
			},
			"titleicon" :
			{
				"parent" :
				{
					"TitleBarControl" :
					{
						"self" :
						{
							"mouseover" :
							{
							},
							"disabled" :
							{
							},
							"deactivate" :
							{
							}
						}
					}
				}
			},
			"minbutton" :
			{
				"parent" :
				{
					"TitleBarControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/img_TB_Min.png\")")
							},
							"mouseover" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/img_TB_Min.png\")")
							},
							"pushed" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/img_TB_Min.png\")")
							},
							"focused" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/img_TB_Min.png\")")
							},
							"selected" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/img_TB_Min.png\")")
							},
							"disabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/img_TB_Min.png\")")
							},
							"deactivate" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/img_TB_Min.png\")")
							}
						}
					}
				}
			},
			"maxbutton" :
			{
				"parent" :
				{
					"TitleBarControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/img_TB_Max.png\")")
							},
							"mouseover" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/img_TB_Max.png\")")
							},
							"pushed" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/img_TB_Max.png\")")
							},
							"focused" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/img_TB_Max.png\")")
							},
							"selected" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/img_TB_Max.png\")")
							},
							"disabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/img_TB_Max.png\")")
							},
							"deactivate" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/img_TB_Max.png\")")
							}
						}
					}
				}
			},
			"normalbutton" :
			{
				"parent" :
				{
					"TitleBarControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/img_TB_Normal.png\")")
							},
							"mouseover" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/img_TB_Normal.png\")")
							},
							"pushed" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/img_TB_Normal.png\")")
							},
							"focused" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/img_TB_Normal.png\")")
							},
							"selected" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/img_TB_Normal.png\")")
							},
							"disabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/img_TB_Normal.png\")")
							},
							"deactivate" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/img_TB_Normal.png\")")
							}
						}
					}
				}
			},
			"closebutton" :
			{
				"parent" :
				{
					"TitleBarControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/img_TB_Close.png\")")
							},
							"mouseover" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/img_TB_Close.png\")")
							},
							"pushed" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/img_TB_Close.png\")")
							},
							"focused" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/img_TB_Close.png\")")
							},
							"selected" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/img_TB_Close.png\")")
							},
							"disabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/img_TB_Close.png\")")
							},
							"deactivate" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/img_TB_Close.png\")")
							}
						}
					}
				}
			},
			"StatusBarControl" :
			{
				"self" :
				{
					"disabled" :
					{
					}
				}
			},
			"progressbar" :
			{
				"parent" :
				{
					"StatusBarControl" :
					{
						"self" :
						{
							"mouseover" :
							{
							},
							"focused" :
							{
							},
							"disabled" :
							{
							}
						}
					}
				}
			},
			"progressbaritem" :
			{
				"parent" :
				{
					"progressbar" :
					{
						"parent" :
						{
							"StatusBarControl" :
							{
								"self" :
								{
									"mouseover" :
									{
									},
									"disabled" :
									{
									}
								}
							}
						}
					},
					"ProgressBar" :
					{
						"self" :
						{
							"mouseover" :
							{
							},
							"disabled" :
							{
							}
						}
					}
				}
			},
			"progressbartext" :
			{
				"parent" :
				{
					"progressbar" :
					{
						"parent" :
						{
							"StatusBarControl" :
							{
								"self" :
								{
									"mouseover" :
									{
									},
									"disabled" :
									{
									}
								}
							}
						}
					}
				}
			},
			"progressstartcap" :
			{
				"parent" :
				{
					"progressbar" :
					{
						"parent" :
						{
							"StatusBarControl" :
							{
								"self" :
								{
									"mouseover" :
									{
									},
									"disabled" :
									{
									}
								}
							}
						}
					}
				}
			},
			"progressendcap" :
			{
				"parent" :
				{
					"progressbar" :
					{
						"parent" :
						{
							"StatusBarControl" :
							{
								"self" :
								{
									"mouseover" :
									{
									},
									"disabled" :
									{
									}
								}
							}
						}
					}
				}
			},
			"statustext" :
			{
				"parent" :
				{
					"StatusBarControl" :
					{
						"self" :
						{
							"mouseover" :
							{
							},
							"disabled" :
							{
							}
						}
					}
				}
			},
			"resizegrip" :
			{
				"parent" :
				{
					"StatusBarControl" :
					{
						"self" :
						{
							"mouseover" :
							{
							},
							"disabled" :
							{
							}
						}
					}
				}
			},
			"Form" :
			{
				"self" :
				{
					"enabled" :
					{
						"color" : nexacro.ColorObject("#666666"),
						"font" : nexacro.FontObject("normal 12px \"Verdana\""),
						"letterSpacing" : nexacro.CSSValueObject("-1px")
					},
					"contents" :
					{
					}
				}
			},
			"Button" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("0px none"),
						"padding" : nexacro.PaddingObject("0px 0px 1px 0px"),
						"color" : nexacro.ColorObject("#ffffff"),
						"letterSpacing" : nexacro.CSSValueObject("-1px")
					},
					"mouseover" :
					{
						"border" : nexacro.BorderObject("1px solid #de6314")
					},
					"focused" :
					{
						"border" : nexacro.BorderObject("1px solid #de6314")
					},
					"selected" :
					{
						"border" : nexacro.BorderObject("1px solid #de6314")
					},
					"pushed" :
					{
					},
					"disabled" :
					{
						"color" : nexacro.ColorObject("#afafaf")
					}
				},
				"class" :
				{
					"btn_TF_Menu" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px 5px 0px 5px"),
								"color" : nexacro.ColorObject("#ffeadd"),
								"font" : nexacro.FontObject("bold 13px \"Verdana\"")
							},
							"mouseover" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px 5px 0px 5px"),
								"color" : nexacro.ColorObject("#ffffff")
							},
							"focused" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px 5px 0px 5px"),
								"color" : nexacro.ColorObject("#ffffff")
							},
							"selected" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px 5px 0px 5px"),
								"color" : nexacro.ColorObject("#ffffff")
							},
							"pushed" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px 5px 0px 5px"),
								"color" : nexacro.ColorObject("#ffffff")
							},
							"disabled" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px 5px 0px 5px"),
								"color" : nexacro.ColorObject("#fe7219")
							}
						}
					},
					"btn_TF_MenuPix" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px 5px 0px 5px"),
								"color" : nexacro.ColorObject("#ffffff"),
								"font" : nexacro.FontObject("bold 13px \"Verdana\"")
							},
							"mouseover" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px 5px 0px 5px"),
								"color" : nexacro.ColorObject("#ffffff"),
								"font" : nexacro.FontObject("bold 13px \"Verdana\"")
							},
							"focused" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px 5px 0px 5px"),
								"color" : nexacro.ColorObject("#ffffff"),
								"font" : nexacro.FontObject("bold 13px \"Verdana\"")
							},
							"selected" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px 5px 0px 5px"),
								"color" : nexacro.ColorObject("#ffffff"),
								"font" : nexacro.FontObject("bold 13px \"Verdana\"")
							},
							"pushed" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px 5px 0px 5px"),
								"color" : nexacro.ColorObject("#ffffff"),
								"font" : nexacro.FontObject("bold 13px \"Verdana\"")
							},
							"disabled" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px 5px 0px 5px"),
								"color" : nexacro.ColorObject("#ffffff"),
								"font" : nexacro.FontObject("bold 13px \"Verdana\"")
							}
						}
					},
					"btn_TF_MenuLspin" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_TF_leftSpinIcon.png\")"),
								"padding" : nexacro.PaddingObject("0px 1px 0px 0px")
							},
							"mouseover" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_TF_leftSpinIcon.png\")"),
								"padding" : nexacro.PaddingObject("0px 1px 0px 0px")
							},
							"focused" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_TF_leftSpinIcon.png\")"),
								"padding" : nexacro.PaddingObject("0px 1px 0px 0px")
							},
							"selected" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_TF_leftSpinIcon.png\")"),
								"padding" : nexacro.PaddingObject("0px 1px 0px 0px")
							},
							"pushed" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_TF_leftSpinIcon.png\")"),
								"padding" : nexacro.PaddingObject("0px 1px 0px 0px")
							},
							"disabled" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_TF_leftSpinIconD.png\")"),
								"padding" : nexacro.PaddingObject("0px 1px 0px 0px")
							}
						}
					},
					"btn_TF_MenuRspin" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_TF_rightSpinIcon.png\")"),
								"padding" : nexacro.PaddingObject("0px 0px 0px 1px")
							},
							"mouseover" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_TF_rightSpinIcon.png\")"),
								"padding" : nexacro.PaddingObject("0px 0px 0px 1px")
							},
							"focused" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_TF_rightSpinIcon.png\")"),
								"padding" : nexacro.PaddingObject("0px 0px 0px 1px")
							},
							"selected" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_TF_rightSpinIcon.png\")"),
								"padding" : nexacro.PaddingObject("0px 0px 0px 1px")
							},
							"pushed" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_TF_rightSpinIcon.png\")"),
								"padding" : nexacro.PaddingObject("0px 0px 0px 1px")
							},
							"disabled" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_TF_rightSpinIconD.png\")"),
								"padding" : nexacro.PaddingObject("0px 1px 0px 0px")
							}
						}
					},
					"btn_TF_LogOut" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_TF_logoutN.png\")"),
								"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
							},
							"mouseover" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_TF_logoutMP.png\")"),
								"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
							},
							"focused" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_TF_logoutMP.png\")"),
								"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
							},
							"pushed" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_TF_logoutMP.png\")"),
								"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
							},
							"selected" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_TF_logoutMP.png\")"),
								"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
							},
							"disabled" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_TF_logoutN.png\")"),
								"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
							}
						}
					},
					"btn_TF_Setting" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_TF_settingN.png\")"),
								"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
							},
							"mouseover" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_TF_settingMP.png\")"),
								"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
							},
							"focused" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_TF_settingMP.png\")"),
								"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
							},
							"pushed" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_TF_settingMP.png\")"),
								"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
							},
							"selected" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_TF_settingMP.png\")"),
								"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
							},
							"disabled" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_TF_settingN.png\")"),
								"padding" : nexacro.PaddingObject("0px")
							}
						}
					},
					"btn_TF_LeftOpen" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_TF_leftOpenN.png\")"),
								"padding" : nexacro.PaddingObject("0px")
							},
							"focused" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_TF_leftOpenN.png\")"),
								"padding" : nexacro.PaddingObject("0px")
							},
							"mouseover" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_TF_leftOpenM.png\")"),
								"padding" : nexacro.PaddingObject("0px")
							},
							"selected" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_TF_leftOpenM.png\")"),
								"padding" : nexacro.PaddingObject("0px")
							},
							"pushed" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_TF_leftOpenM.png\")"),
								"padding" : nexacro.PaddingObject("0px")
							},
							"disabled" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_TF_leftOpenN.png\")"),
								"padding" : nexacro.PaddingObject("0px")
							}
						}
					},
					"btn_TF_Trans" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px")
							},
							"focused" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px")
							},
							"mouseover" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px")
							},
							"pushed" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px")
							},
							"disabled" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px")
							}
						}
					},
					"btn_LF_Search" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px 0px 1px 0px")
							},
							"focused" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px 0px 1px 0px")
							},
							"mouseover" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px 0px 1px 0px")
							},
							"selected" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px 0px 1px 0px")
							},
							"pushed" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px 0px 1px 0px")
							},
							"disabled" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px 0px 1px 0px")
							}
						}
					},
					"btn_LF_MenuBg" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("0px none, 1px solid #444648, 0px none, 0px none"),
								"padding" : nexacro.PaddingObject("0px")
							},
							"focused" :
							{
								"border" : nexacro.BorderObject("0px none, 1px solid #444648, 0px none, 0px none"),
								"padding" : nexacro.PaddingObject("0px")
							},
							"disabled" :
							{
								"border" : nexacro.BorderObject("0px none, 1px solid #444648, 0px none, 0px none"),
								"padding" : nexacro.PaddingObject("0px")
							},
							"mouseover" :
							{
								"border" : nexacro.BorderObject("0px none,  1px solid transparent, 0px none, 0px none"),
								"padding" : nexacro.PaddingObject("0px")
							},
							"pushed" :
							{
								"border" : nexacro.BorderObject("0px none,  1px solid transparent, 0px none, 0px none"),
								"padding" : nexacro.PaddingObject("0px")
							}
						}
					},
					"btn_LF_Menu" :
					{
						"self" :
						{
							"enabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/tab_LF_menuN.png\")")
							},
							"disabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/tab_LF_menuN.png\")")
							},
							"mouseover" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/tab_LF_menuN.png\")")
							},
							"focused" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/tab_LF_menuN.png\")")
							},
							"pushed" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/tab_LF_menuN.png\")")
							},
							"selected" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/tab_LF_menuN.png\")")
							}
						}
					},
					"btn_LF_BookMark" :
					{
						"self" :
						{
							"enabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/tab_LF_bookMarkN.png\")")
							},
							"disabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/tab_LF_bookMarkN.png\")")
							},
							"mouseover" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/tab_LF_bookMarkN.png\")")
							},
							"focused" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/tab_LF_bookMarkN.png\")")
							},
							"pushed" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/tab_LF_bookMarkN.png\")")
							},
							"selected" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/tab_LF_bookMarkN.png\")")
							}
						}
					},
					"btn_LF_MenuSearch" :
					{
						"self" :
						{
							"enabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/tab_LF_searchN.png\")")
							},
							"disabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/tab_LF_searchN.png\")")
							},
							"mouseover" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/tab_LF_searchN.png\")")
							},
							"focused" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/tab_LF_searchN.png\")")
							},
							"pushed" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/tab_LF_searchN.png\")")
							},
							"selected" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/tab_LF_searchN.png\")")
							}
						}
					},
					"btn_LF_MenuHistory" :
					{
						"self" :
						{
							"enabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/tab_LF_historyN.png\")")
							},
							"disabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/tab_LF_historyN.png\")")
							},
							"mouseover" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/tab_LF_historyN.png\")")
							},
							"focused" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/tab_LF_historyN.png\")")
							},
							"pushed" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/tab_LF_historyN.png\")")
							},
							"selected" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/tab_LF_historyN.png\")")
							}
						}
					},
					"btn_LF_SelectMenu" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("0px none, 1px solid transparent, 0px none, 0px none"),
								"padding" : nexacro.PaddingObject("0px")
							},
							"focused" :
							{
								"border" : nexacro.BorderObject("0px none, 1px solid transparent, 0px none, 0px none"),
								"padding" : nexacro.PaddingObject("0px")
							},
							"mouseover" :
							{
								"border" : nexacro.BorderObject("0px none, 1px solid transparent, 0px none, 0px none"),
								"padding" : nexacro.PaddingObject("0px")
							},
							"pushed" :
							{
								"border" : nexacro.BorderObject("0px none, 1px solid transparent, 0px none, 0px none"),
								"padding" : nexacro.PaddingObject("0px")
							},
							"disabled" :
							{
								"border" : nexacro.BorderObject("0px none, 1px solid transparent, 0px none, 0px none"),
								"padding" : nexacro.PaddingObject("0px")
							}
						}
					},
					"btn_LF_Select01" :
					{
						"self" :
						{
							"enabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/tab_LF_menuS.png\")")
							},
							"focused" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/tab_LF_menuS.png\")")
							},
							"mouseover" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/tab_LF_menuS.png\")")
							},
							"pushed" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/tab_LF_menuS.png\")")
							},
							"disabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/tab_LF_menuS.png\")")
							}
						}
					},
					"btn_LF_Select02" :
					{
						"self" :
						{
							"enabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/tab_LF_bookMarkS.png\")")
							},
							"focused" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/tab_LF_bookMarkS.png\")")
							},
							"mouseover" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/tab_LF_bookMarkS.png\")")
							},
							"pushed" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/tab_LF_bookMarkS.png\")")
							},
							"disabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/tab_LF_bookMarkS.png\")")
							}
						}
					},
					"btn_LF_Select03" :
					{
						"self" :
						{
							"enabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/tab_LF_searchS.png\")")
							},
							"focused" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/tab_LF_searchS.png\")")
							},
							"mouseover" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/tab_LF_searchS.png\")")
							},
							"pushed" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/tab_LF_searchS.png\")")
							},
							"disabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/tab_LF_searchS.png\")")
							}
						}
					},
					"btn_LF_Select04" :
					{
						"self" :
						{
							"enabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/tab_LF_historyS.png\")")
							},
							"focused" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/tab_LF_historyS.png\")")
							},
							"mouseover" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/tab_LF_historyS.png\")")
							},
							"pushed" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/tab_LF_historyS.png\")")
							},
							"disabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/tab_LF_historyS.png\")")
							}
						}
					},
					"btn_MDI_Home" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_homeN.png\")"),
								"padding" : nexacro.PaddingObject("0px")
							},
							"focused" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_homeN.png\")"),
								"padding" : nexacro.PaddingObject("0px")
							},
							"mouseover" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_homeM.png\")"),
								"padding" : nexacro.PaddingObject("0px")
							},
							"selected" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_homeM.png\")"),
								"padding" : nexacro.PaddingObject("0px")
							},
							"pushed" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_homeM.png\")"),
								"padding" : nexacro.PaddingObject("0px")
							},
							"disabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_homeD.png\")")
							}
						}
					},
					"btn_MDI_Tab" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("0px none, 1px solid #e4e7ea, 0px none, 0px none"),
								"padding" : nexacro.PaddingObject("0px 26px 0px 12px"),
								"font" : nexacro.FontObject("bold 12px \"Verdana\""),
								"color" : nexacro.ColorObject("#949799")
							},
							"mouseover" :
							{
								"border" : nexacro.BorderObject("0px none, 1px solid #e4e7ea, 0px none, 0px none"),
								"padding" : nexacro.PaddingObject("0px 26px 0px 12px"),
								"color" : nexacro.ColorObject("#004473")
							},
							"selected" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px 26px 0px 12px"),
								"color" : nexacro.ColorObject("#004473")
							},
							"focused" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px 26px 0px 12px"),
								"color" : nexacro.ColorObject("#004473")
							},
							"pushed" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px 26px 0px 12px"),
								"color" : nexacro.ColorObject("#004473")
							}
						}
					},
					"btn_MDI_TabFix" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px 26px 0px 12px"),
								"color" : nexacro.ColorObject("#004473"),
								"font" : nexacro.FontObject("bold 12px \"Verdana\"")
							},
							"focused" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px 26px 0px 12px"),
								"color" : nexacro.ColorObject("#004473"),
								"font" : nexacro.FontObject("bold 12px \"Verdana\"")
							},
							"mouseover" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px 26px 0px 12px"),
								"color" : nexacro.ColorObject("#004473"),
								"font" : nexacro.FontObject("bold 12px \"Verdana\"")
							},
							"pushed" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px 26px 0px 12px"),
								"color" : nexacro.ColorObject("#004473"),
								"font" : nexacro.FontObject("bold 12px \"Verdana\"")
							},
							"selected" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px 26px 0px 12px"),
								"color" : nexacro.ColorObject("#004473"),
								"font" : nexacro.FontObject("bold 12px \"Verdana\"")
							},
							"disabled" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px 26px 0px 12px"),
								"color" : nexacro.ColorObject("#004473"),
								"font" : nexacro.FontObject("bold 12px \"Verdana\"")
							}
						}
					},
					"btn_MDI_TabClose" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"icon" : nexacro.UrlObject("URL(\"theme://images/tab_AF_tabExtraBtn.png\")")
							},
							"focused" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"icon" : nexacro.UrlObject("URL(\"theme://images/tab_AF_tabExtraBtn.png\")")
							},
							"mouseover" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"icon" : nexacro.UrlObject("URL(\"theme://images/tab_AF_tabExtraBtn.png\")")
							},
							"pushed" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"icon" : nexacro.UrlObject("URL(\"theme://images/tab_AF_tabExtraBtn.png\")")
							},
							"selected" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"icon" : nexacro.UrlObject("URL(\"theme://images/tab_AF_tabExtraBtn.png\")")
							},
							"disabled" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"icon" : nexacro.UrlObject("URL(\"theme://images/tab_AF_tabExtraBtn.png\")")
							}
						}
					},
					"btn_MDI_ScnBg" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px")
							},
							"focused" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px")
							},
							"mouseover" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px")
							},
							"selected" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px")
							},
							"disabled" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px")
							}
						}
					},
					"btn_MDI_LeftTabCha" :
					{
						"self" :
						{
							"enabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_leftTabChaN.png\")")
							},
							"mouseover" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_leftTabChaM.png\")")
							},
							"focused" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_leftTabChaM.png\")")
							},
							"selected" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_leftTabChaM.png\")")
							},
							"pushed" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_leftTabChaM.png\")")
							},
							"disabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_leftTabChaN.png\")")
							}
						}
					},
					"btn_MDI_RightTabCha" :
					{
						"self" :
						{
							"enabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_rightTabChaN.png\")")
							},
							"mouseover" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_rightTabChaM.png\")")
							},
							"focused" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_rightTabChaM.png\")")
							},
							"selected" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_rightTabChaM.png\")")
							},
							"pushed" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_rightTabChaM.png\")")
							},
							"disabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_rightTabChaN.png\")")
							}
						}
					},
					"btn_MDI_ScnFull" :
					{
						"self" :
						{
							"enabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_scnFullN.png\")")
							},
							"mouseover" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_scnFullM.png\")")
							},
							"focused" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_scnFullM.png\")")
							},
							"selected" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_scnFullM.png\")")
							},
							"pushed" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_scnFullM.png\")")
							},
							"disabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_scnFullN.png\")")
							}
						}
					},
					"btn_MDI_ScnWin" :
					{
						"self" :
						{
							"enabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_scnWinN.png\")")
							},
							"mouseover" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_scnWinM.png\")")
							},
							"focused" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_scnWinM.png\")")
							},
							"selected" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_scnWinM.png\")")
							},
							"pushed" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_scnWinM.png\")")
							},
							"disabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_scnWinN.png\")")
							}
						}
					},
					"btn_MDI_ScnVDiv" :
					{
						"self" :
						{
							"enabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_scnVDivN.png\")")
							},
							"mouseover" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_scnVDivM.png\")")
							},
							"focused" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_scnVDivM.png\")")
							},
							"selected" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_scnVDivM.png\")")
							},
							"pushed" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_scnVDivM.png\")")
							},
							"disabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_scnVDivN.png\")")
							}
						}
					},
					"btn_MDI_ScnHDiv" :
					{
						"self" :
						{
							"enabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_scnHDivN.png\")")
							},
							"mouseover" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_scnHDivM.png\")")
							},
							"focused" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_scnHDivM.png\")")
							},
							"selected" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_scnHDivM.png\")")
							},
							"pushed" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_scnHDivM.png\")")
							},
							"disabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_scnHDivN.png\")")
							}
						}
					},
					"btn_MDI_ScnClose" :
					{
						"self" :
						{
							"enabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_scnCloseN.png\")")
							},
							"mouseover" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_scnCloseM.png\")")
							},
							"focused" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_scnCloseM.png\")")
							},
							"selected" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_scnCloseM.png\")")
							},
							"pushed" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_scnCloseM.png\")")
							},
							"disabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_scnCloseN.png\")")
							}
						}
					},
					"btn_WF_SubAction" :
					{
						"self" :
						{
							"enabled" :
							{
								"padding" : nexacro.PaddingObject("0px 0px 1px 0px")
							},
							"mouseover" :
							{
								"border" : nexacro.BorderObject("1px solid #5d5d5d")
							},
							"focused" :
							{
								"border" : nexacro.BorderObject("1px solid #5d5d5d")
							},
							"selected" :
							{
								"border" : nexacro.BorderObject("1px solid #5d5d5d")
							},
							"pushed" :
							{
							}
						}
					},
					"btn_WF_PopupAction" :
					{
						"self" :
						{
							"enabled" :
							{
								"padding" : nexacro.PaddingObject("0px 0px 1px 0px")
							},
							"mouseover" :
							{
								"border" : nexacro.BorderObject("1px solid #006b90")
							},
							"focused" :
							{
								"border" : nexacro.BorderObject("1px solid #006b90")
							},
							"selected" :
							{
								"border" : nexacro.BorderObject("1px solid #006b90")
							},
							"pushed" :
							{
							}
						}
					},
					"btn_WF_Associated" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("1px solid #e7e7e7"),
								"padding" : nexacro.PaddingObject("0px 0px 1px 0px"),
								"color" : nexacro.ColorObject("#666666"),
								"font" : nexacro.FontObject("normal 12px/12px \"Verdana\"")
							},
							"mouseover" :
							{
								"border" : nexacro.BorderObject("1px solid #c8c8c8"),
								"color" : nexacro.ColorObject("#006cb7")
							},
							"focused" :
							{
								"border" : nexacro.BorderObject("1px solid #c8c8c8"),
								"color" : nexacro.ColorObject("#006cb7")
							},
							"selected" :
							{
								"border" : nexacro.BorderObject("1px solid #c8c8c8"),
								"color" : nexacro.ColorObject("#006cb7")
							},
							"pushed" :
							{
								"border" : nexacro.BorderObject("1px solid #b1b1b1"),
								"color" : nexacro.ColorObject("#006cb7")
							}
						}
					},
					"btn_WF_Search" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_searchBtnN.png\")")
							},
							"mouseover" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_searchBtnM.png\")")
							},
							"focused" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_searchBtnM.png\")")
							},
							"selected" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_searchBtnM.png\")")
							},
							"pushed" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_searchBtnP.png\")")
							},
							"disabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_searchBtnD.png\")")
							}
						}
					},
					"btn_WF_ShuttleBox" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("1px solid #c8c8c8")
							},
							"mouseover" :
							{
								"border" : nexacro.BorderObject("1px solid #c8c8c8")
							},
							"focused" :
							{
								"border" : nexacro.BorderObject("1px solid #c8c8c8")
							},
							"selected" :
							{
								"border" : nexacro.BorderObject("1px solid #c8c8c8")
							},
							"pushed" :
							{
								"border" : nexacro.BorderObject("1px solid #c8c8c8")
							},
							"disabled" :
							{
								"border" : nexacro.BorderObject("0px none")
							}
						}
					},
					"btn_WF_ShuttleIconL" :
					{
						"self" :
						{
							"enabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_AF_midLeftN.png\")")
							},
							"mouseover" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_AF_midLeftM.png\")")
							},
							"focused" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_AF_midLeftM.png\")")
							},
							"selected" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_AF_midLeftM.png\")")
							},
							"pushed" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_AF_midLeftP.png\")")
							},
							"disabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_AF_midLeftD.png\")")
							}
						}
					},
					"btn_WF_ShuttleIconR" :
					{
						"self" :
						{
							"enabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_AF_midRightN.png\")")
							},
							"mouseover" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_AF_midRightM.png\")")
							},
							"focused" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_AF_midRightM.png\")")
							},
							"selected" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_AF_midRightM.png\")")
							},
							"pushed" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_AF_midRightP.png\")")
							},
							"disabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_AF_midRightD.png\")")
							}
						}
					},
					"btn_WF_ShuttleIconU" :
					{
						"self" :
						{
							"enabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_AF_midUpN.png\")")
							},
							"mouseover" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_AF_midUpM.png\")")
							},
							"focused" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_AF_midUpM.png\")")
							},
							"selected" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_AF_midUpM.png\")")
							},
							"pushed" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_AF_midUpP.png\")")
							},
							"disabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_AF_midUpD.png\")")
							}
						}
					},
					"btn_WF_ShuttleIconD" :
					{
						"self" :
						{
							"enabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_AF_midDownN.png\")")
							},
							"mouseover" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_AF_midDownM.png\")")
							},
							"focused" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_AF_midDownM.png\")")
							},
							"selected" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_AF_midDownM.png\")")
							},
							"pushed" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_AF_midDownP.png\")")
							},
							"disabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_AF_midDownD.png\")")
							}
						}
					},
					"btn_WF_Btitle" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_bookMarkN.png\")")
							},
							"disabled" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_bookMarkN.png\")")
							},
							"mouseover" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_bookMarkN.png\")")
							},
							"focused" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_bookMarkN.png\")")
							},
							"selected" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_bookMarkS.png\")")
							},
							"pushed" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_bookMarkS.png\")")
							}
						}
					},
					"btn_WF_BtitleOn" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_bookMarkS.png\")")
							},
							"disabled" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_bookMarkS.png\")")
							},
							"mouseover" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_bookMarkS.png\")")
							},
							"focused" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_bookMarkS.png\")")
							},
							"selected" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_bookMarkN.png\")")
							},
							"pushed" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_bookMarkN.png\")")
							}
						}
					},
					"btn_WF_SearchIcon" :
					{
						"self" :
						{
							"enabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_searchIcon.png\")")
							}
						}
					},
					"btn_WF_SearchIconBK" :
					{
						"self" :
						{
							"enabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_searchIconBK.png\")")
							}
						}
					},
					"btn_WF_Inc" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_incN.png\")"),
								"padding" : nexacro.PaddingObject("0px")
							},
							"mouseover" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_incM.png\")"),
								"padding" : nexacro.PaddingObject("0px")
							},
							"focused" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_incM.png\")"),
								"padding" : nexacro.PaddingObject("0px")
							},
							"selected" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_incM.png\")"),
								"padding" : nexacro.PaddingObject("0px")
							},
							"pushed" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_incP.png\")"),
								"padding" : nexacro.PaddingObject("0px")
							},
							"disabled" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_incD.png\")"),
								"padding" : nexacro.PaddingObject("0px")
							}
						}
					},
					"btn_WF_Dec" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_decN.png\")"),
								"padding" : nexacro.PaddingObject("0px")
							},
							"mouseover" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_decM.png\")"),
								"padding" : nexacro.PaddingObject("0px")
							},
							"focused" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_decM.png\")"),
								"padding" : nexacro.PaddingObject("0px")
							},
							"selected" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_decM.png\")"),
								"padding" : nexacro.PaddingObject("0px")
							},
							"pushed" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_decP.png\")"),
								"padding" : nexacro.PaddingObject("0px")
							},
							"disabled" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_decD.png\")"),
								"padding" : nexacro.PaddingObject("0px")
							}
						}
					},
					"btn_WF_Help" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_helpN.png\")"),
								"padding" : nexacro.PaddingObject("0px")
							},
							"mouseover" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_helpM.png\")"),
								"padding" : nexacro.PaddingObject("0px")
							},
							"focused" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_helpM.png\")"),
								"padding" : nexacro.PaddingObject("0px")
							},
							"selected" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_helpM.png\")"),
								"padding" : nexacro.PaddingObject("0px")
							},
							"pushed" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_helpP.png\")"),
								"padding" : nexacro.PaddingObject("0px")
							},
							"disabled" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_helpD.png\")"),
								"padding" : nexacro.PaddingObject("0px")
							}
						}
					},
					"btn_LOGIN_Action" :
					{
						"self" :
						{
							"enabled" :
							{
								"padding" : nexacro.PaddingObject("0px 0px 1px 0px"),
								"font" : nexacro.FontObject("bold 14px \"Verdana\"")
							},
							"mouseover" :
							{
								"border" : nexacro.BorderObject("1px solid #de6314"),
								"font" : nexacro.FontObject("bold 14px \"Verdana\"")
							},
							"focused" :
							{
								"border" : nexacro.BorderObject("1px solid #de6314"),
								"font" : nexacro.FontObject("bold 14px \"Verdana\"")
							},
							"selected" :
							{
								"border" : nexacro.BorderObject("1px solid #de6314"),
								"font" : nexacro.FontObject("bold 14px \"Verdana\"")
							},
							"pushed" :
							{
								"font" : nexacro.FontObject("bold 14px \"Verdana\"")
							}
						}
					},
					"btn_MAIN_More" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MAIN_moreN.png\")"),
								"padding" : nexacro.PaddingObject("0px")
							},
							"focused" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MAIN_moreN.png\")"),
								"padding" : nexacro.PaddingObject("0px")
							},
							"mouseover" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MAIN_moreP.png\")"),
								"padding" : nexacro.PaddingObject("0px")
							},
							"selected" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MAIN_moreP.png\")"),
								"padding" : nexacro.PaddingObject("0px")
							},
							"pushed" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MAIN_moreP.png\")"),
								"padding" : nexacro.PaddingObject("0px")
							},
							"disabled" :
							{
							}
						}
					},
					"btn_POP_Close" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px"),
								"icon" : nexacro.UrlObject("URL(\"theme://images/img_TB_Close.png\")")
							},
							"focused" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px"),
								"icon" : nexacro.UrlObject("URL(\"theme://images/img_TB_Close.png\")")
							},
							"mouseover" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px"),
								"icon" : nexacro.UrlObject("URL(\"theme://images/img_TB_Close.png\")")
							},
							"selected" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px"),
								"icon" : nexacro.UrlObject("URL(\"theme://images/img_TB_Close.png\")")
							},
							"pushed" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px"),
								"icon" : nexacro.UrlObject("URL(\"theme://images/img_TB_Close.png\")")
							},
							"disabled" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px"),
								"icon" : nexacro.UrlObject("URL(\"theme://images/img_TB_Close.png\")")
							}
						}
					}
				}
			},
			"Calendar" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("1px solid #c8c8c8")
					},
					"mouseover" :
					{
						"border" : nexacro.BorderObject("1px solid #006cb7")
					},
					"focused" :
					{
						"border" : nexacro.BorderObject("1px solid #006cb7")
					},
					"disabled" :
					{
						"border" : nexacro.BorderObject("0px none"),
						"color" : nexacro.ColorObject("#afafaf")
					},
					"readonly" :
					{
					}
				},
				"class" :
				{
					"com_WF_Essential" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("1px solid #39b54a")
							}
						}
					}
				}
			},
			"dropbutton" :
			{
				"parent" :
				{
					"Calendar" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_dropBtnN.png\")"),
								"padding" : nexacro.PaddingObject("0px 2px 0px 2px")
							},
							"mouseover" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_dropBtnM.png\")")
							},
							"focused" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_dropBtnM.png\")")
							},
							"selected" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_dropBtnM.png\")")
							},
							"pushed" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_dropBtnM.png\")")
							},
							"disabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_dropBtnD.png\")")
							}
						}
					},
					"Combo" :
					{
						"self" :
						{
							"enabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/com_WF_dropBtnN.png\")")
							},
							"focused" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/com_WF_dropBtnN.png\")")
							},
							"selected" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/com_WF_dropBtnN.png\")")
							},
							"mouseover" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/com_WF_dropBtnM.png\")")
							},
							"pushed" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/com_WF_dropBtnM.png\")")
							},
							"disabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/com_WF_dropBtnD.png\")")
							}
						}
					},
					"cellcombo" :
					{
						"parent" :
						{
							"GridCellControl" :
							{
								"self" :
								{
									"enabled" :
									{
										"icon" : nexacro.UrlObject("URL(\"theme://images/com_WF_dropBtnN.png\")")
									},
									"focused" :
									{
										"icon" : nexacro.UrlObject("URL(\"theme://images/com_WF_dropBtnN.png\")")
									},
									"selected" :
									{
										"icon" : nexacro.UrlObject("URL(\"theme://images/com_WF_dropBtnN.png\")")
									},
									"mouseover" :
									{
										"icon" : nexacro.UrlObject("URL(\"theme://images/com_WF_dropBtnM.png\")")
									},
									"pushed" :
									{
										"icon" : nexacro.UrlObject("URL(\"theme://images/com_WF_dropBtnM.png\")")
									},
									"disabled" :
									{
										"icon" : nexacro.UrlObject("URL(\"theme://images/com_WF_dropBtnD.png\")")
									}
								}
							}
						}
					},
					"cellcalendar" :
					{
						"parent" :
						{
							"GridCellControl" :
							{
								"self" :
								{
									"enabled" :
									{
										"border" : nexacro.BorderObject("0px none"),
										"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_dropBtnN.png\")"),
										"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
									},
									"focused" :
									{
										"border" : nexacro.BorderObject("0px none"),
										"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_dropBtnN.png\")"),
										"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
									},
									"selected" :
									{
										"border" : nexacro.BorderObject("0px none"),
										"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_dropBtnN.png\")"),
										"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
									},
									"mouseover" :
									{
										"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_dropBtnM.png\")")
									},
									"pushed" :
									{
										"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_dropBtnM.png\")")
									},
									"disabled" :
									{
										"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_dropBtnD.png\")")
									}
								}
							}
						}
					}
				}
			},
			"calendaredit" :
			{
				"parent" :
				{
					"Calendar" :
					{
						"self" :
						{
							"enabled" :
							{
								"padding" : nexacro.PaddingObject("0px 5px 1px 5px"),
								"letterSpacing" : nexacro.CSSValueObject("0px")
							},
							"mouseover" :
							{
								"padding" : nexacro.PaddingObject("0px 5px 1px 5px"),
								"letterSpacing" : nexacro.CSSValueObject("0px")
							},
							"focused" :
							{
								"padding" : nexacro.PaddingObject("0px 5px 1px 5px"),
								"letterSpacing" : nexacro.CSSValueObject("0px")
							},
							"disabled" :
							{
								"color" : nexacro.ColorObject("#afafaf")
							},
							"nulltext" :
							{
								"color" : nexacro.ColorObject("#d0d0d0")
							},
							"readonly" :
							{
								"color" : nexacro.ColorObject("#777777")
							}
						}
					},
					"cellcalendar" :
					{
						"parent" :
						{
							"GridCellControl" :
							{
								"self" :
								{
									"enabled" :
									{
										"padding" : nexacro.PaddingObject("0px 5px 1px 5px")
									},
									"mouseover" :
									{
										"padding" : nexacro.PaddingObject("0px 5px 1px 5px")
									},
									"focused" :
									{
										"padding" : nexacro.PaddingObject("0px 5px 1px 5px")
									},
									"readonly" :
									{
										"padding" : nexacro.PaddingObject("0px 5px 1px 5px")
									},
									"nulltext" :
									{
										"padding" : nexacro.PaddingObject("0px 5px 1px 5px")
									},
									"disabled" :
									{
										"border" : nexacro.BorderObject("0px none"),
										"color" : nexacro.ColorObject("#aeaeae")
									}
								}
							}
						}
					}
				}
			},
			"calendarspindownbutton" :
			{
				"parent" :
				{
					"Calendar" :
					{
						"self" :
						{
							"enabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/spin_WF_spinDownN.png\")")
							},
							"focused" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/spin_WF_spinDownN.png\")")
							},
							"selected" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/spin_WF_spinDownN.png\")")
							},
							"mouseover" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/spin_WF_spinDownM.png\")")
							},
							"pushed" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/spin_WF_spinDownM.png\")")
							},
							"disabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/spin_WF_spinDownD.png\")")
							}
						}
					},
					"cellcalendar" :
					{
						"parent" :
						{
							"GridCellControl" :
							{
								"self" :
								{
									"enabled" :
									{
										"icon" : nexacro.UrlObject("URL(\"theme://images/spin_WF_spinDownN.png\")")
									},
									"focused" :
									{
										"icon" : nexacro.UrlObject("URL(\"theme://images/spin_WF_spinDownN.png\")")
									},
									"selected" :
									{
										"icon" : nexacro.UrlObject("URL(\"theme://images/spin_WF_spinDownN.png\")")
									},
									"disabled" :
									{
										"icon" : nexacro.UrlObject("URL(\"theme://images/spin_WF_spinDownN.png\")")
									},
									"mouseover" :
									{
										"icon" : nexacro.UrlObject("URL(\"theme://images/spin_WF_spinDownM.png\")")
									},
									"pushed" :
									{
										"icon" : nexacro.UrlObject("URL(\"theme://images/spin_WF_spinDownM.png\")")
									}
								}
							}
						}
					}
				}
			},
			"calendarspinupbutton" :
			{
				"parent" :
				{
					"Calendar" :
					{
						"self" :
						{
							"enabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/spin_WF_spinUpN.png\")")
							},
							"focused" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/spin_WF_spinUpN.png\")")
							},
							"selected" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/spin_WF_spinUpN.png\")")
							},
							"mouseover" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/spin_WF_spinUpM.png\")")
							},
							"pushed" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/spin_WF_spinUpM.png\")")
							},
							"disabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/spin_WF_spinUpD.png\")")
							}
						}
					},
					"cellcalendar" :
					{
						"parent" :
						{
							"GridCellControl" :
							{
								"self" :
								{
									"enabled" :
									{
										"icon" : nexacro.UrlObject("URL(\"theme://images/spin_WF_spinUpN.png\")")
									},
									"focused" :
									{
										"icon" : nexacro.UrlObject("URL(\"theme://images/spin_WF_spinUpN.png\")")
									},
									"disabled" :
									{
										"icon" : nexacro.UrlObject("URL(\"theme://images/spin_WF_spinUpN.png\")")
									},
									"mouseover" :
									{
										"icon" : nexacro.UrlObject("URL(\"theme://images/spin_WF_spinUpM.png\")")
									},
									"pushed" :
									{
										"icon" : nexacro.UrlObject("URL(\"theme://images/spin_WF_spinUpM.png\")")
									}
								}
							}
						}
					}
				}
			},
			"CheckBox" :
			{
				"self" :
				{
					"enabled" :
					{
						"icon" : nexacro.UrlObject("URL(\"theme://images/chk_WF_chkBoxN.png\")"),
						"textPadding" : nexacro.PaddingObject("0px 0px 0px 6px")
					},
					"mouseover" :
					{
						"icon" : nexacro.UrlObject("URL(\"theme://images/chk_WF_chkBoxM.png\")")
					},
					"focused" :
					{
						"icon" : nexacro.UrlObject("URL(\"theme://images/chk_WF_chkBoxM.png\")")
					},
					"selected" :
					{
						"icon" : nexacro.UrlObject("URL(\"theme://images/chk_WF_chkBoxS.png\")")
					},
					"mouseover_selected" :
					{
						"icon" : nexacro.UrlObject("URL(\"theme://images/chk_WF_chkBoxMS.png\")")
					},
					"disabled" :
					{
						"icon" : nexacro.UrlObject("URL(\"theme://images/chk_WF_chkBoxD.png\")"),
						"color" : nexacro.ColorObject("#afafaf")
					},
					"disabled_selected" :
					{
						"icon" : nexacro.UrlObject("URL(\"theme://images/chk_WF_chkBoxDS.png\")")
					}
				},
				"class" :
				{
					"chk_LOGIN_IdSave" :
					{
						"self" :
						{
							"enabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/chk_LOGIN_chkBoxN.png\")"),
								"textPadding" : nexacro.PaddingObject("0px 0px 0px 6px"),
								"color" : nexacro.ColorObject("#ffffff")
							},
							"mouseover" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/chk_LOGIN_chkBoxM.png\")")
							},
							"focused" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/chk_LOGIN_chkBoxM.png\")")
							},
							"selected" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/chk_LOGIN_chkBoxS.png\")")
							},
							"mouseover_selected" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/chk_LOGIN_chkBoxMS.png\")")
							}
						}
					}
				}
			},
			"Combo" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("1px solid #c8c8c8")
					},
					"mouseover" :
					{
						"border" : nexacro.BorderObject("1px solid #006cb7")
					},
					"focused" :
					{
						"border" : nexacro.BorderObject("1px solid #006cb7")
					},
					"disabled" :
					{
						"border" : nexacro.BorderObject("0px none")
					},
					"readonly" :
					{
					}
				},
				"class" :
				{
					"com_WF_Essential" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("1px solid #39b54a")
							}
						}
					}
				}
			},
			"comboedit" :
			{
				"parent" :
				{
					"Combo" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px 5px 1px 5px")
							},
							"mouseover" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px 5px 1px 5px")
							},
							"focused" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px 5px 1px 5px")
							},
							"readonly" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px 5px 1px 5px")
							},
							"disabled" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"color" : nexacro.ColorObject("#aeaeae")
							},
							"nulltext" :
							{
								"color" : nexacro.ColorObject("#d0d0d0")
							}
						}
					},
					"cellcombo" :
					{
						"parent" :
						{
							"GridCellControl" :
							{
								"self" :
								{
									"enabled" :
									{
										"border" : nexacro.BorderObject("0px none"),
										"padding" : nexacro.PaddingObject("0px 5px 1px 5px")
									},
									"mouseover" :
									{
										"border" : nexacro.BorderObject("0px none"),
										"padding" : nexacro.PaddingObject("0px 5px 1px 5px")
									},
									"focused" :
									{
										"border" : nexacro.BorderObject("0px none"),
										"padding" : nexacro.PaddingObject("0px 5px 1px 5px")
									},
									"disabled" :
									{
										"border" : nexacro.BorderObject("0px none"),
										"color" : nexacro.ColorObject("#afafaf")
									},
									"nulltext" :
									{
										"color" : nexacro.ColorObject("#d0d0d0")
									}
								}
							}
						}
					}
				}
			},
			"combolist" :
			{
				"parent" :
				{
					"Combo" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("1px solid #c8c8c8")
							},
							"mouseover" :
							{
								"border" : nexacro.BorderObject("1px solid #c8c8c8")
							},
							"focused" :
							{
								"border" : nexacro.BorderObject("1px solid #c8c8c8")
							},
							"disabled" :
							{
								"border" : nexacro.BorderObject("1px solid #c8c8c8")
							},
							"readonly" :
							{
								"border" : nexacro.BorderObject("1px solid #c8c8c8")
							}
						}
					},
					"cellcombo" :
					{
						"parent" :
						{
							"GridCellControl" :
							{
								"self" :
								{
									"enabled" :
									{
										"border" : nexacro.BorderObject("1px solid #c8c8c8")
									},
									"disabled" :
									{
										"border" : nexacro.BorderObject("1px solid #c8c8c8")
									}
								}
							}
						}
					}
				}
			},
			"listboxitem" :
			{
				"parent" :
				{
					"combolist" :
					{
						"parent" :
						{
							"Combo" :
							{
								"self" :
								{
									"enabled" :
									{
										"padding" : nexacro.PaddingObject("4px 5px 4px 5px")
									},
									"focused" :
									{
										"padding" : nexacro.PaddingObject("4px 5px 4px 5px")
									},
									"disabled" :
									{
										"padding" : nexacro.PaddingObject("4px 5px 4px 5px")
									},
									"mouseover" :
									{
										"color" : nexacro.ColorObject("#666666")
									},
									"selected" :
									{
										"color" : nexacro.ColorObject("#ffffff")
									},
									"mouseover_selected" :
									{
										"color" : nexacro.ColorObject("#ffffff")
									}
								}
							},
							"cellcombo" :
							{
								"parent" :
								{
									"GridCellControl" :
									{
										"self" :
										{
											"enabled" :
											{
												"padding" : nexacro.PaddingObject("4px 5px 4px 5px")
											},
											"mouseover" :
											{
												"color" : nexacro.ColorObject("#666666")
											},
											"focused" :
											{
												"color" : nexacro.ColorObject("#666666")
											},
											"selected" :
											{
												"color" : nexacro.ColorObject("#ffffff")
											}
										}
									}
								}
							}
						}
					},
					"ListBox" :
					{
						"self" :
						{
							"enabled" :
							{
								"padding" : nexacro.PaddingObject("4px 5px 4px 5px")
							},
							"focused" :
							{
								"padding" : nexacro.PaddingObject("4px 5px 4px 5px")
							},
							"mouseover" :
							{
								"color" : nexacro.ColorObject("#666666")
							},
							"selected" :
							{
								"color" : nexacro.ColorObject("#ffffff")
							},
							"mouseover_selected" :
							{
								"color" : nexacro.ColorObject("#ffffff")
							},
							"disabled_selected" :
							{
								"color" : nexacro.ColorObject("#666666")
							}
						}
					},
					"ListBoxControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"padding" : nexacro.PaddingObject("4px 5px 4px 5px")
							},
							"focused" :
							{
								"padding" : nexacro.PaddingObject("4px 5px 4px 5px")
							},
							"mouseover" :
							{
								"color" : nexacro.ColorObject("#666666")
							},
							"selected" :
							{
								"color" : nexacro.ColorObject("#ffffff")
							},
							"mouseover_selected" :
							{
								"color" : nexacro.ColorObject("#ffffff")
							},
							"disabled_selected" :
							{
								"color" : nexacro.ColorObject("#666666")
							}
						}
					}
				}
			},
			"DatePickerControl" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("1px solid #2b3753")
					},
					"mouseover" :
					{
						"border" : nexacro.BorderObject("1px solid #2b3753")
					},
					"focused" :
					{
						"border" : nexacro.BorderObject("1px solid #2b3753")
					},
					"readonly" :
					{
						"border" : nexacro.BorderObject("1px solid #2b3753")
					}
				}
			},
			"head" :
			{
				"parent" :
				{
					"DatePickerControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"padding" : nexacro.PaddingObject("2px 0px 0px 0px"),
								"color" : nexacro.ColorObject("#ffffff"),
								"font" : nexacro.FontObject("bold 14px \"Verdana\""),
								"letterSpacing" : nexacro.CSSValueObject("0px")
							},
							"mouseover" :
							{
								"padding" : nexacro.PaddingObject("2px 0px 0px 0px"),
								"color" : nexacro.ColorObject("#ffffff"),
								"font" : nexacro.FontObject("bold 14px \"Verdana\""),
								"letterSpacing" : nexacro.CSSValueObject("0px")
							},
							"focused" :
							{
								"padding" : nexacro.PaddingObject("2px 0px 0px 0px"),
								"color" : nexacro.ColorObject("#ffffff"),
								"font" : nexacro.FontObject("bold 14px \"Verdana\""),
								"letterSpacing" : nexacro.CSSValueObject("0px")
							},
							"readonly" :
							{
								"padding" : nexacro.PaddingObject("2px 0px 0px 0px"),
								"color" : nexacro.ColorObject("#ffffff"),
								"font" : nexacro.FontObject("bold 14px \"Verdana\""),
								"letterSpacing" : nexacro.CSSValueObject("0px")
							}
						}
					},
					"Grid" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #d3d3d3, 0px none"),
								"color" : nexacro.ColorObject("#c14000")
							},
							"mouseover" :
							{
								"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #d3d3d3, 0px none"),
								"color" : nexacro.ColorObject("#c14000")
							},
							"focused" :
							{
								"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #d3d3d3, 0px none"),
								"color" : nexacro.ColorObject("#c14000")
							},
							"readonly" :
							{
								"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #d3d3d3, 0px none"),
								"color" : nexacro.ColorObject("#c14000")
							}
						}
					}
				}
			},
			"nextbutton" :
			{
				"parent" :
				{
					"head" :
					{
						"parent" :
						{
							"DatePickerControl" :
							{
								"self" :
								{
									"enabled" :
									{
										"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_dpkHeadNextN.png\")")
									},
									"focused" :
									{
										"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_dpkHeadNextN.png\")")
									},
									"selected" :
									{
										"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_dpkHeadNextN.png\")")
									},
									"mouseover" :
									{
										"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_dpkHeadNextM.png\")")
									},
									"pushed" :
									{
										"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_dpkHeadNextM.png\")")
									},
									"disabled" :
									{
										"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_dpkHeadNextD.png\")")
									}
								}
							}
						}
					},
					"Menu" :
					{
						"self" :
						{
							"mouseover" :
							{
							},
							"focused" :
							{
							},
							"pushed" :
							{
							},
							"selected" :
							{
							}
						}
					},
					"menupopupmenu" :
					{
						"parent" :
						{
							"Menu" :
							{
								"self" :
								{
									"enabled" :
									{
										"icon" : nexacro.UrlObject("URL(\"theme://images/btn_AF_midRightN.png\")")
									},
									"focused" :
									{
										"icon" : nexacro.UrlObject("URL(\"theme://images/btn_AF_midRightM.png\")")
									},
									"mouseover" :
									{
										"icon" : nexacro.UrlObject("URL(\"theme://images/btn_AF_midRightM.png\")")
									},
									"selected" :
									{
										"icon" : nexacro.UrlObject("URL(\"theme://images/btn_AF_midRightM.png\")")
									},
									"pushed" :
									{
										"icon" : nexacro.UrlObject("URL(\"theme://images/btn_AF_midRightP.png\")")
									}
								}
							}
						}
					},
					"Tab" :
					{
						"self" :
						{
							"enabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_AF_midRightN.png\")"),
								"padding" : nexacro.PaddingObject("0px 5px 10px 0px")
							},
							"mouseover" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_AF_midRightM.png\")")
							},
							"focused" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_AF_midRightM.png\")")
							},
							"selected" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_AF_midRightM.png\")")
							},
							"pushed" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_AF_midRightP.png\")")
							},
							"disabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_AF_midRightD.png\")")
							}
						}
					}
				}
			},
			"prevbutton" :
			{
				"parent" :
				{
					"head" :
					{
						"parent" :
						{
							"DatePickerControl" :
							{
								"self" :
								{
									"enabled" :
									{
										"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_dpkHeadPrevN.png\")")
									},
									"focused" :
									{
										"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_dpkHeadPrevN.png\")")
									},
									"selected" :
									{
										"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_dpkHeadPrevN.png\")")
									},
									"mouseover" :
									{
										"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_dpkHeadPrevM.png\")")
									},
									"pushed" :
									{
										"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_dpkHeadPrevM.png\")")
									},
									"disabled" :
									{
										"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_dpkHeadPrevD.png\")")
									}
								}
							}
						}
					},
					"Menu" :
					{
						"self" :
						{
							"focused" :
							{
							},
							"mouseover" :
							{
							},
							"pushed" :
							{
							},
							"selected" :
							{
							}
						}
					},
					"menupopupmenu" :
					{
						"parent" :
						{
							"Menu" :
							{
								"self" :
								{
									"enabled" :
									{
										"icon" : nexacro.UrlObject("URL(\"theme://images/btn_AF_midLeftN.png\")")
									},
									"focused" :
									{
										"icon" : nexacro.UrlObject("URL(\"theme://images/btn_AF_midLeftM.png\")")
									},
									"mouseover" :
									{
										"icon" : nexacro.UrlObject("URL(\"theme://images/btn_AF_midLeftM.png\")")
									},
									"selected" :
									{
										"icon" : nexacro.UrlObject("URL(\"theme://images/btn_AF_midLeftM.png\")")
									},
									"pushed" :
									{
										"icon" : nexacro.UrlObject("URL(\"theme://images/btn_AF_midLeftP.png\")")
									}
								}
							}
						}
					},
					"Tab" :
					{
						"self" :
						{
							"enabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_AF_midLeftN.png\")"),
								"padding" : nexacro.PaddingObject("0px 10px 10px 20px")
							},
							"mouseover" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_AF_midLeftM.png\")")
							},
							"focused" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_AF_midLeftM.png\")")
							},
							"selected" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_AF_midLeftM.png\")")
							},
							"pushed" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_AF_midLeftP.png\")")
							},
							"disabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_AF_midLeftD.png\")")
							}
						}
					}
				}
			},
			"monthspin" :
			{
				"parent" :
				{
					"head" :
					{
						"parent" :
						{
							"DatePickerControl" :
							{
								"self" :
								{
									"enabled" :
									{
										"border" : nexacro.BorderObject("1px solid #0e1934"),
										"padding" : nexacro.PaddingObject("1px 0px 3px 0px")
									},
									"mouseover" :
									{
										"border" : nexacro.BorderObject("1px solid #0e1934"),
										"padding" : nexacro.PaddingObject("1px 0px 3px 0px")
									},
									"focused" :
									{
										"border" : nexacro.BorderObject("1px solid #0e1934"),
										"padding" : nexacro.PaddingObject("1px 0px 3px 0px")
									}
								}
							}
						}
					}
				}
			},
			"yearspin" :
			{
				"parent" :
				{
					"head" :
					{
						"parent" :
						{
							"DatePickerControl" :
							{
								"self" :
								{
									"enabled" :
									{
										"border" : nexacro.BorderObject("1px solid #0e1934"),
										"padding" : nexacro.PaddingObject("1px 0px 3px 0px")
									},
									"mouseover" :
									{
										"border" : nexacro.BorderObject("1px solid #0e1934"),
										"padding" : nexacro.PaddingObject("1px 0px 3px 0px")
									},
									"focused" :
									{
										"border" : nexacro.BorderObject("1px solid #0e1934"),
										"padding" : nexacro.PaddingObject("1px 0px 3px 0px")
									}
								}
							}
						}
					}
				}
			},
			"spinupbutton" :
			{
				"parent" :
				{
					"monthspin" :
					{
						"parent" :
						{
							"head" :
							{
								"parent" :
								{
									"DatePickerControl" :
									{
										"self" :
										{
											"enabled" :
											{
												"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_dpkHeadSpinUpBtnN.png\")")
											},
											"mouseover" :
											{
												"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_dpkHeadSpinUpBtnM.png\")")
											},
											"focused" :
											{
												"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_dpkHeadSpinUpBtnM.png\")")
											},
											"pushed" :
											{
												"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_dpkHeadSpinUpBtnM.png\")")
											},
											"selected" :
											{
												"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_dpkHeadSpinUpBtnM.png\")")
											},
											"disabled" :
											{
												"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_dpkHeadSpinUpBtnD.png\")")
											}
										}
									}
								}
							}
						}
					},
					"yearspin" :
					{
						"parent" :
						{
							"head" :
							{
								"parent" :
								{
									"DatePickerControl" :
									{
										"self" :
										{
											"enabled" :
											{
												"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_dpkHeadSpinUpBtnN.png\")")
											},
											"mouseover" :
											{
												"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_dpkHeadSpinUpBtnM.png\")")
											},
											"focused" :
											{
												"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_dpkHeadSpinUpBtnM.png\")")
											},
											"pushed" :
											{
												"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_dpkHeadSpinUpBtnM.png\")")
											},
											"selected" :
											{
												"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_dpkHeadSpinUpBtnM.png\")")
											}
										}
									}
								}
							}
						}
					},
					"Spin" :
					{
						"self" :
						{
							"enabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/spin_WF_spinUpN.png\")")
							},
							"focused" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/spin_WF_spinUpN.png\")")
							},
							"selected" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/spin_WF_spinUpN.png\")")
							},
							"mouseover" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/spin_WF_spinUpM.png\")")
							},
							"pushed" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/spin_WF_spinUpM.png\")")
							},
							"disabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/spin_WF_spinUpD.png\")")
							}
						}
					}
				}
			},
			"spindownbutton" :
			{
				"parent" :
				{
					"monthspin" :
					{
						"parent" :
						{
							"head" :
							{
								"parent" :
								{
									"DatePickerControl" :
									{
										"self" :
										{
											"enabled" :
											{
												"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_dpkHeadSpinDownBtnN.png\")")
											},
											"mouseover" :
											{
												"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_dpkHeadSpinDownBtnM.png\")")
											},
											"focused" :
											{
												"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_dpkHeadSpinDownBtnM.png\")")
											},
											"pushed" :
											{
												"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_dpkHeadSpinDownBtnM.png\")")
											},
											"selected" :
											{
												"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_dpkHeadSpinDownBtnM.png\")")
											},
											"disabled" :
											{
												"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_dpkHeadSpinDownBtnD.png\")")
											}
										}
									}
								}
							}
						}
					},
					"yearspin" :
					{
						"parent" :
						{
							"head" :
							{
								"parent" :
								{
									"DatePickerControl" :
									{
										"self" :
										{
											"enabled" :
											{
												"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_dpkHeadSpinDownBtnN.png\")")
											},
											"mouseover" :
											{
												"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_dpkHeadSpinDownBtnM.png\")")
											},
											"focused" :
											{
												"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_dpkHeadSpinDownBtnM.png\")")
											},
											"pushed" :
											{
												"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_dpkHeadSpinDownBtnM.png\")")
											},
											"selected" :
											{
												"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_dpkHeadSpinDownBtnM.png\")")
											}
										}
									}
								}
							}
						}
					},
					"Spin" :
					{
						"self" :
						{
							"enabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/spin_WF_spinDownN.png\")")
							},
							"focused" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/spin_WF_spinDownN.png\")")
							},
							"selected" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/spin_WF_spinDownN.png\")")
							},
							"mouseover" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/spin_WF_spinDownM.png\")")
							},
							"pushed" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/spin_WF_spinDownM.png\")")
							},
							"disabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/spin_WF_spinDownD.png\")")
							}
						}
					}
				}
			},
			"weekband" :
			{
				"parent" :
				{
					"body" :
					{
						"parent" :
						{
							"DatePickerControl" :
							{
								"self" :
								{
									"mouseover" :
									{
									},
									"disabled" :
									{
									}
								}
							}
						}
					}
				}
			},
			"weekitem" :
			{
				"parent" :
				{
					"body" :
					{
						"parent" :
						{
							"DatePickerControl" :
							{
								"self" :
								{
									"enabled" :
									{
										"color" : nexacro.ColorObject("#ffffff"),
										"font" : nexacro.FontObject("bold 12px \"Verdana\"")
									},
									"mouseover" :
									{
										"color" : nexacro.ColorObject("#ffffff"),
										"font" : nexacro.FontObject("bold 12px \"Verdana\"")
									},
									"disabled" :
									{
										"color" : nexacro.ColorObject("#ffffff"),
										"font" : nexacro.FontObject("bold 12px \"Verdana\"")
									},
									"readonly" :
									{
										"color" : nexacro.ColorObject("#ffffff"),
										"font" : nexacro.FontObject("bold 12px \"Verdana\"")
									},
									"sunday" :
									{
										"color" : nexacro.ColorObject("#ee6b67")
									},
									"saturday" :
									{
										"color" : nexacro.ColorObject("#5f9dde")
									}
								}
							}
						}
					}
				}
			},
			"dayitem" :
			{
				"parent" :
				{
					"body" :
					{
						"parent" :
						{
							"DatePickerControl" :
							{
								"self" :
								{
									"sunday" :
									{
										"color" : nexacro.ColorObject("#ee6b67")
									},
									"saturday" :
									{
										"color" : nexacro.ColorObject("#5f9dde")
									},
									"enabled" :
									{
										"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
									},
									"focused" :
									{
										"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
									},
									"readonly" :
									{
										"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
									},
									"selected" :
									{
										"font" : nexacro.FontObject("bold 12px \"Verdana\""),
										"color" : nexacro.ColorObject("#ffffff")
									},
									"today" :
									{
										"font" : nexacro.FontObject("bold 12px \"Verdana\""),
										"color" : nexacro.ColorObject("#ffffff")
									},
									"trailingday" :
									{
										"color" : nexacro.ColorObject("#bebebe")
									},
									"mouseover" :
									{
										"font" : nexacro.FontObject("bold 12px \"Verdana\"")
									},
									"mouseover_saturday" :
									{
										"color" : nexacro.ColorObject("#666666"),
										"font" : nexacro.FontObject("bold 12px \"Verdana\"")
									},
									"mouseover_sunday" :
									{
										"color" : nexacro.ColorObject("#666666"),
										"font" : nexacro.FontObject("bold 12px \"Verdana\"")
									},
									"mouseover_trailingday" :
									{
										"color" : nexacro.ColorObject("#666666"),
										"font" : nexacro.FontObject("bold 12px \"Verdana\"")
									},
									"mouseover_today" :
									{
										"color" : nexacro.ColorObject("#666666"),
										"font" : nexacro.FontObject("bold 12px \"Verdana\"")
									},
									"mouseover_selected" :
									{
										"color" : nexacro.ColorObject("#666666"),
										"font" : nexacro.FontObject("bold 12px \"Verdana\"")
									}
								}
							}
						}
					}
				}
			},
			"Edit" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("1px solid #c8c8c8"),
						"padding" : nexacro.PaddingObject("0px 5px 1px 5px")
					},
					"mouseover" :
					{
						"border" : nexacro.BorderObject("1px solid #006cb7")
					},
					"focused" :
					{
						"border" : nexacro.BorderObject("1px solid #006cb7")
					},
					"disabled" :
					{
						"border" : nexacro.BorderObject("0px none"),
						"color" : nexacro.ColorObject("#afafaf")
					},
					"readonly" :
					{
					},
					"nulltext" :
					{
						"color" : nexacro.ColorObject("#d0d0d0")
					}
				},
				"class" :
				{
					"edi_LF_SearchEdit" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("0px none, 0px none, 2px solid #9b9e9f, 0px none"),
								"padding" : nexacro.PaddingObject("0px 20px 0px 0px"),
								"color" : nexacro.ColorObject("#9b9e9f")
							},
							"mouseover" :
							{
								"border" : nexacro.BorderObject("0px none, 0px none, 2px solid #9b9e9f, 0px none"),
								"padding" : nexacro.PaddingObject("0px 20px 0px 0px"),
								"color" : nexacro.ColorObject("#9b9e9f")
							},
							"focused" :
							{
								"border" : nexacro.BorderObject("0px none, 0px none, 2px solid #9b9e9f, 0px none"),
								"padding" : nexacro.PaddingObject("0px 20px 0px 0px"),
								"color" : nexacro.ColorObject("#9b9e9f")
							},
							"readonly" :
							{
								"border" : nexacro.BorderObject("0px none, 0px none, 2px solid #9b9e9f, 0px none"),
								"padding" : nexacro.PaddingObject("0px 20px 0px 0px"),
								"color" : nexacro.ColorObject("#9b9e9f")
							},
							"disabled" :
							{
								"border" : nexacro.BorderObject("0px none, 0px none, 2px solid #9b9e9f, 0px none"),
								"padding" : nexacro.PaddingObject("0px 20px 0px 0px"),
								"color" : nexacro.ColorObject("#9b9e9f")
							},
							"nulltext" :
							{
								"color" : nexacro.ColorObject("#9b9e9f")
							}
						}
					},
					"com_WF_Essential" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("1px solid #39b54a")
							},
							"readonly" :
							{
								"border" : nexacro.BorderObject("1px solid #39b54a")
							}
						}
					},
					"edl_WF_MCpadding" :
					{
						"self" :
						{
							"enabled" :
							{
								"padding" : nexacro.PaddingObject("0px 20px 1px 5px")
							}
						}
					},
					"edl_WF_MCpaddingEssen" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("1px solid #39b54a"),
								"padding" : nexacro.PaddingObject("0px 20px 1px 5px")
							}
						}
					},
					"edi_LOGIN_IdPwd" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px 5px 0px 0px"),
								"color" : nexacro.ColorObject("#ffffff"),
								"letterSpacing" : nexacro.CSSValueObject("-0.5px")
							},
							"mouseover" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px 5px 0px 0px"),
								"color" : nexacro.ColorObject("#ffffff"),
								"letterSpacing" : nexacro.CSSValueObject("-0.5px")
							},
							"focused" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px 5px 0px 0px"),
								"color" : nexacro.ColorObject("#ffffff"),
								"letterSpacing" : nexacro.CSSValueObject("-0.5px")
							},
							"readonly" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px 5px 0px 0px"),
								"color" : nexacro.ColorObject("#ffffff"),
								"letterSpacing" : nexacro.CSSValueObject("-0.5px")
							},
							"disabled" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px 5px 0px 0px"),
								"color" : nexacro.ColorObject("#ffffff"),
								"letterSpacing" : nexacro.CSSValueObject("-0.5px")
							},
							"nulltext" :
							{
								"color" : nexacro.ColorObject("#ffffff")
							}
						}
					}
				}
			},
			"FileUpload" :
			{
				"self" :
				{
					"mouseover" :
					{
					},
					"focused" :
					{
					},
					"selected" :
					{
					},
					"disabled" :
					{
					}
				}
			},
			"fileuploaditem" :
			{
				"parent" :
				{
					"FileUpload" :
					{
						"self" :
						{
							"focused" :
							{
							},
							"disabled" :
							{
							}
						}
					}
				}
			},
			"fileuploaditembutton" :
			{
				"parent" :
				{
					"fileuploaditem" :
					{
						"parent" :
						{
							"FileUpload" :
							{
								"self" :
								{
									"enabled" :
									{
										"border" : nexacro.BorderObject("0px none, 0px none, 0px none, 2px solid #ffffff"),
										"padding" : nexacro.PaddingObject("0px 10px 1px 10px"),
										"textPadding" : nexacro.PaddingObject("0px"),
										"color" : nexacro.ColorObject("#ffffff"),
										"letterSpacing" : nexacro.CSSValueObject("-2px")
									},
									"focused" :
									{
										"border" : nexacro.BorderObject("0px none, 0px none, 0px none, 2px solid #ffffff"),
										"padding" : nexacro.PaddingObject("0px 10px 1px 10px"),
										"textPadding" : nexacro.PaddingObject("0px"),
										"color" : nexacro.ColorObject("#ffffff"),
										"letterSpacing" : nexacro.CSSValueObject("-2px")
									},
									"selected" :
									{
										"border" : nexacro.BorderObject("0px none, 0px none, 0px none, 2px solid #ffffff"),
										"padding" : nexacro.PaddingObject("0px 10px 1px 10px"),
										"textPadding" : nexacro.PaddingObject("0px"),
										"color" : nexacro.ColorObject("#ffffff"),
										"letterSpacing" : nexacro.CSSValueObject("-2px")
									},
									"mouseover" :
									{
									},
									"pushed" :
									{
									},
									"disabled" :
									{
										"color" : nexacro.ColorObject("#afafaf")
									}
								}
							}
						}
					}
				}
			},
			"fileuploaditemedit" :
			{
				"parent" :
				{
					"fileuploaditem" :
					{
						"parent" :
						{
							"FileUpload" :
							{
								"self" :
								{
									"enabled" :
									{
										"border" : nexacro.BorderObject("1px solid #c8c8c8"),
										"padding" : nexacro.PaddingObject("0px 5px 1px 5px")
									},
									"mouseover" :
									{
										"border" : nexacro.BorderObject("1px solid #c8c8c8"),
										"padding" : nexacro.PaddingObject("0px 5px 1px 5px")
									},
									"focused" :
									{
										"border" : nexacro.BorderObject("1px solid #c8c8c8"),
										"padding" : nexacro.PaddingObject("0px 5px 1px 5px")
									},
									"readonly" :
									{
										"border" : nexacro.BorderObject("1px solid #c8c8c8"),
										"padding" : nexacro.PaddingObject("0px 5px 1px 5px")
									},
									"nulltext" :
									{
										"border" : nexacro.BorderObject("1px solid #c8c8c8"),
										"padding" : nexacro.PaddingObject("0px 5px 1px 5px")
									},
									"disabled" :
									{
										"border" : nexacro.BorderObject("0px none"),
										"color" : nexacro.ColorObject("#afafaf")
									}
								}
							}
						}
					}
				}
			},
			"Grid" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("2px solid #f26104, 1px solid #d3d3d3 1px solid #d3d3d3, 1px solid #d3d3d3")
					},
					"mouseover" :
					{
						"border" : nexacro.BorderObject("2px solid #f26104, 1px solid #d3d3d3 1px solid #d3d3d3, 1px solid #d3d3d3")
					},
					"focused" :
					{
						"border" : nexacro.BorderObject("2px solid #f26104, 1px solid #d3d3d3 1px solid #d3d3d3, 1px solid #d3d3d3")
					},
					"disabled" :
					{
						"border" : nexacro.BorderObject("2px solid #f26104, 1px solid #d3d3d3 1px solid #d3d3d3, 1px solid #d3d3d3")
					},
					"readonly" :
					{
						"border" : nexacro.BorderObject("2px solid #f26104, 1px solid #d3d3d3 1px solid #d3d3d3, 1px solid #d3d3d3")
					}
				},
				"class" :
				{
					"grd_TF_LogPopup" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("0px none")
							},
							"focused" :
							{
								"border" : nexacro.BorderObject("0px none")
							},
							"mouseover" :
							{
								"border" : nexacro.BorderObject("0px none")
							},
							"readonly" :
							{
								"border" : nexacro.BorderObject("0px none")
							}
						}
					},
					"grd_LF_TreeGrd" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("0px none")
							},
							"focused" :
							{
								"border" : nexacro.BorderObject("0px none")
							},
							"mouseover" :
							{
								"border" : nexacro.BorderObject("0px none")
							},
							"readonly" :
							{
								"border" : nexacro.BorderObject("0px none")
							}
						}
					},
					"grd_LF_MenuGrid" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("0px none")
							},
							"focused" :
							{
								"border" : nexacro.BorderObject("0px none")
							},
							"mouseover" :
							{
								"border" : nexacro.BorderObject("0px none")
							},
							"readonly" :
							{
								"border" : nexacro.BorderObject("0px none")
							}
						}
					},
					"grd_LF_HistoryGrid" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("0px none")
							},
							"focused" :
							{
								"border" : nexacro.BorderObject("0px none")
							},
							"mouseover" :
							{
								"border" : nexacro.BorderObject("0px none")
							},
							"readonly" :
							{
								"border" : nexacro.BorderObject("0px none")
							}
						}
					},
					"grd_WF_treeGrd" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("1px solid #d3d3d3"),
								"padding" : nexacro.PaddingObject("12px 0px 12x 0px")
							},
							"focused" :
							{
								"border" : nexacro.BorderObject("1px solid #d3d3d3"),
								"padding" : nexacro.PaddingObject("12px 0px 12x 0px")
							},
							"mouseover" :
							{
								"border" : nexacro.BorderObject("1px solid #d3d3d3"),
								"padding" : nexacro.PaddingObject("12px 0px 12x 0px")
							},
							"disabled" :
							{
								"border" : nexacro.BorderObject("1px solid #d3d3d3"),
								"padding" : nexacro.PaddingObject("12px 0px 12x 0px")
							},
							"readonly" :
							{
								"border" : nexacro.BorderObject("1px solid #d3d3d3"),
								"padding" : nexacro.PaddingObject("12px 0px 12x 0px")
							}
						}
					},
					"grd_MAIN_ListGrid" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("0px none")
							},
							"focused" :
							{
								"border" : nexacro.BorderObject("0px none")
							},
							"mouseover" :
							{
								"border" : nexacro.BorderObject("0px none")
							},
							"readonly" :
							{
								"border" : nexacro.BorderObject("0px none")
							}
						}
					}
				}
			},
			"cell" :
			{
				"parent" :
				{
					"row" :
					{
						"parent" :
						{
							"head" :
							{
								"parent" :
								{
									"Grid" :
									{
										"self" :
										{
											"enabled" :
											{
												"border" : nexacro.BorderObject("0px none , 1px solid #e0e1e1, 1px solid #d3d3d3 , 0px none"),
												"padding" : nexacro.PaddingObject("0px 6px 1px 6px"),
												"font" : nexacro.FontObject("bold 12px \"Verdana\"")
											},
											"mouseover" :
											{
												"border" : nexacro.BorderObject("0px none , 1px solid #e0e1e1, 1px solid #d3d3d3 , 0px none"),
												"padding" : nexacro.PaddingObject("0px 6px 1px 6px"),
												"font" : nexacro.FontObject("bold 12px \"Verdana\"")
											},
											"focused" :
											{
												"border" : nexacro.BorderObject("0px none , 1px solid #e0e1e1, 1px solid #d3d3d3 , 0px none"),
												"padding" : nexacro.PaddingObject("0px 6px 1px 6px"),
												"font" : nexacro.FontObject("bold 12px \"Verdana\"")
											},
											"selected" :
											{
												"border" : nexacro.BorderObject("0px none , 1px solid #e0e1e1, 1px solid #d3d3d3 , 0px none"),
												"padding" : nexacro.PaddingObject("0px 6px 1px 6px"),
												"font" : nexacro.FontObject("bold 12px \"Verdana\"")
											},
											"disabled" :
											{
												"border" : nexacro.BorderObject("0px none , 1px solid #e0e1e1, 1px solid #d3d3d3 , 0px none"),
												"padding" : nexacro.PaddingObject("0px 6px 1px 6px"),
												"font" : nexacro.FontObject("bold 12px \"Verdana\"")
											},
											"readonly" :
											{
												"border" : nexacro.BorderObject("0px none , 1px solid #e0e1e1, 1px solid #d3d3d3 , 0px none"),
												"padding" : nexacro.PaddingObject("0px 6px 1px 6px"),
												"font" : nexacro.FontObject("bold 12px \"Verdana\"")
											},
											"blinked" :
											{
												"border" : nexacro.BorderObject("0px none , 1px solid #e0e1e1, 1px solid #d3d3d3 , 0px none"),
												"padding" : nexacro.PaddingObject("0px 6px 1px 6px"),
												"font" : nexacro.FontObject("bold 12px \"Verdana\"")
											}
										}
									}
								}
							},
							"body" :
							{
								"parent" :
								{
									"Grid" :
									{
										"self" :
										{
											"enabled" :
											{
												"border" : nexacro.BorderObject("0px none, 1px solid #f5f5f5, 1px solid #f5f5f5, 0px none"),
												"padding" : nexacro.PaddingObject("2px 4px")
											},
											"focused" :
											{
												"border" : nexacro.BorderObject("0px none, 1px solid #f5f5f5, 1px solid #f5f5f5, 0px none"),
												"padding" : nexacro.PaddingObject("2px 4px")
											},
											"readonly" :
											{
												"border" : nexacro.BorderObject("0px none, 1px solid #f5f5f5, 1px solid #f5f5f5, 0px none"),
												"padding" : nexacro.PaddingObject("2px 4px")
											},
											"blinked" :
											{
												"border" : nexacro.BorderObject("0px none, 1px solid #f5f5f5, 1px solid #f5f5f5, 0px none"),
												"padding" : nexacro.PaddingObject("2px 4px")
											},
											"mouseover" :
											{
											},
											"selected" :
											{
											}
										},
										"class" :
										{
											"grd_TF_LogPopup" :
											{
												"self" :
												{
													"enabled" :
													{
														"border" : nexacro.BorderObject("0px none"),
														"padding" : nexacro.PaddingObject("0px 0px 0px 20px"),
														"color" : nexacro.ColorObject("#868787")
													},
													"focused" :
													{
														"border" : nexacro.BorderObject("0px none"),
														"padding" : nexacro.PaddingObject("0px 0px 0px 20px"),
														"color" : nexacro.ColorObject("#868787")
													},
													"mouseover" :
													{
														"border" : nexacro.BorderObject("0px none"),
														"padding" : nexacro.PaddingObject("0px 0px 0px 20px"),
														"color" : nexacro.ColorObject("#c2c3c3"),
														"font" : nexacro.FontObject("bold 12px \"Verdana\"")
													},
													"selected" :
													{
														"border" : nexacro.BorderObject("0px none"),
														"padding" : nexacro.PaddingObject("0px 0px 0px 20px"),
														"color" : nexacro.ColorObject("#c2c3c3"),
														"font" : nexacro.FontObject("bold 12px \"Verdana\"")
													}
												}
											},
											"grd_LF_TreeGrd" :
											{
												"self" :
												{
													"enabled" :
													{
														"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #454546, 0px none"),
														"padding" : nexacro.PaddingObject("0px"),
														"color" : nexacro.ColorObject("#dddddd")
													},
													"focused" :
													{
														"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #454546, 0px none"),
														"padding" : nexacro.PaddingObject("0px"),
														"color" : nexacro.ColorObject("#dddddd")
													},
													"selected" :
													{
														"color" : nexacro.ColorObject("#ffffff"),
														"font" : nexacro.FontObject("bold 12px \"Verdana\"")
													},
													"mouseover" :
													{
													}
												}
											},
											"grd_LF_MenuBookMark" :
											{
												"self" :
												{
													"focused" :
													{
													},
													"mouseover" :
													{
													},
													"selected" :
													{
													}
												}
											},
											"btn_LF_MenuSearch" :
											{
												"self" :
												{
													"focused" :
													{
													},
													"mouseover" :
													{
													},
													"selected" :
													{
													}
												}
											},
											"grd_LF_MenuGrid" :
											{
												"self" :
												{
													"enabled" :
													{
														"border" : nexacro.BorderObject("0px none"),
														"padding" : nexacro.PaddingObject("0px 0px 0px 40px"),
														"color" : nexacro.ColorObject("#c2c3c3")
													},
													"focused" :
													{
														"border" : nexacro.BorderObject("0px none"),
														"padding" : nexacro.PaddingObject("0px 0px 0px 40px"),
														"color" : nexacro.ColorObject("#c2c3c3")
													},
													"mouseover" :
													{
														"border" : nexacro.BorderObject("0px none"),
														"padding" : nexacro.PaddingObject("0px 0px 0px 40px"),
														"color" : nexacro.ColorObject("#94e2fd"),
														"font" : nexacro.FontObject("bold 12px \"Verdana\"")
													},
													"selected" :
													{
														"border" : nexacro.BorderObject("0px none"),
														"padding" : nexacro.PaddingObject("0px 0px 0px 40px"),
														"color" : nexacro.ColorObject("#94e2fd"),
														"font" : nexacro.FontObject("bold 12px \"Verdana\"")
													}
												}
											},
											"grd_LF_HistoryGrid" :
											{
												"self" :
												{
													"enabled" :
													{
														"border" : nexacro.BorderObject("0px none"),
														"padding" : nexacro.PaddingObject("0px 0px 0px 40px"),
														"color" : nexacro.ColorObject("#c2c3c3")
													},
													"focused" :
													{
														"border" : nexacro.BorderObject("0px none"),
														"padding" : nexacro.PaddingObject("0px 0px 0px 40px"),
														"color" : nexacro.ColorObject("#c2c3c3")
													},
													"mouseover" :
													{
														"border" : nexacro.BorderObject("0px none"),
														"padding" : nexacro.PaddingObject("0px 0px 0px 40px"),
														"color" : nexacro.ColorObject("#94e2fd"),
														"font" : nexacro.FontObject("bold 12px \"Verdana\"")
													},
													"selected" :
													{
														"border" : nexacro.BorderObject("0px none"),
														"padding" : nexacro.PaddingObject("0px 0px 0px 40px"),
														"color" : nexacro.ColorObject("#94e2fd"),
														"font" : nexacro.FontObject("bold 12px \"Verdana\"")
													}
												}
											},
											"grd_WF_treeGrd" :
											{
												"self" :
												{
													"enabled" :
													{
														"border" : nexacro.BorderObject("0px none"),
														"padding" : nexacro.PaddingObject("0px 10px 0px 10px")
													},
													"focused" :
													{
														"border" : nexacro.BorderObject("0px none"),
														"padding" : nexacro.PaddingObject("0px 10px 0px 10px")
													},
													"blinked" :
													{
														"border" : nexacro.BorderObject("0px none"),
														"padding" : nexacro.PaddingObject("0px 10px 0px 10px")
													},
													"disabled" :
													{
														"border" : nexacro.BorderObject("0px none"),
														"padding" : nexacro.PaddingObject("0px 10px 0px 10px")
													},
													"readonly" :
													{
														"border" : nexacro.BorderObject("0px none"),
														"padding" : nexacro.PaddingObject("0px 10px 0px 10px")
													},
													"mouseover" :
													{
													},
													"selected" :
													{
													},
													"mouseover_selected" :
													{
													}
												}
											},
											"grd_MAIN_ListGrid" :
											{
												"self" :
												{
													"enabled" :
													{
														"border" : nexacro.BorderObject("0px none"),
														"color" : nexacro.ColorObject("#555555")
													},
													"focused" :
													{
														"border" : nexacro.BorderObject("0px none"),
														"color" : nexacro.ColorObject("#555555")
													},
													"mouseover" :
													{
														"border" : nexacro.BorderObject("0px none"),
														"color" : nexacro.ColorObject("#555555")
													},
													"selected" :
													{
														"border" : nexacro.BorderObject("0px none"),
														"color" : nexacro.ColorObject("#555555")
													}
												}
											}
										}
									}
								}
							},
							"summary" :
							{
								"parent" :
								{
									"Grid" :
									{
										"self" :
										{
											"enabled" :
											{
												"border" : nexacro.BorderObject("1px solid #a1d9e9, 0px none, 0px none, 0px none"),
												"padding" : nexacro.PaddingObject("0px 8px"),
												"color" : nexacro.ColorObject("#113367"),
												"font" : nexacro.FontObject("bold 12px \"Verdana\""),
												"letterSpacing" : nexacro.CSSValueObject("-0.5px")
											},
											"focused" :
											{
												"border" : nexacro.BorderObject("1px solid #a1d9e9, 0px none, 0px none, 0px none"),
												"padding" : nexacro.PaddingObject("0px 8px"),
												"color" : nexacro.ColorObject("#113367"),
												"font" : nexacro.FontObject("bold 12px \"Verdana\""),
												"letterSpacing" : nexacro.CSSValueObject("-0.5px")
											},
											"mouseover" :
											{
												"border" : nexacro.BorderObject("1px solid #a1d9e9, 0px none, 0px none, 0px none"),
												"padding" : nexacro.PaddingObject("0px 8px"),
												"color" : nexacro.ColorObject("#113367"),
												"font" : nexacro.FontObject("bold 12px \"Verdana\""),
												"letterSpacing" : nexacro.CSSValueObject("-0.5px")
											},
											"selected" :
											{
												"border" : nexacro.BorderObject("1px solid #a1d9e9, 0px none, 0px none, 0px none"),
												"padding" : nexacro.PaddingObject("0px 8px"),
												"color" : nexacro.ColorObject("#113367"),
												"font" : nexacro.FontObject("bold 12px \"Verdana\""),
												"letterSpacing" : nexacro.CSSValueObject("-0.5px")
											},
											"blinked" :
											{
												"border" : nexacro.BorderObject("1px solid #a1d9e9, 0px none, 0px none, 0px none"),
												"padding" : nexacro.PaddingObject("0px 8px"),
												"color" : nexacro.ColorObject("#113367"),
												"font" : nexacro.FontObject("bold 12px \"Verdana\""),
												"letterSpacing" : nexacro.CSSValueObject("-0.5px")
											},
											"disabled" :
											{
												"border" : nexacro.BorderObject("1px solid #a1d9e9, 0px none, 0px none, 0px none"),
												"padding" : nexacro.PaddingObject("0px 8px"),
												"color" : nexacro.ColorObject("#113367"),
												"font" : nexacro.FontObject("bold 12px \"Verdana\""),
												"letterSpacing" : nexacro.CSSValueObject("-0.5px")
											},
											"readonly" :
											{
												"border" : nexacro.BorderObject("1px solid #a1d9e9, 0px none, 0px none, 0px none"),
												"padding" : nexacro.PaddingObject("0px 8px"),
												"color" : nexacro.ColorObject("#113367"),
												"font" : nexacro.FontObject("bold 12px \"Verdana\""),
												"letterSpacing" : nexacro.CSSValueObject("-0.5px")
											}
										}
									}
								}
							}
						}
					}
				},
				"class" :
				{
					"grd_LF_TreeGrd2D" :
					{
						"parent" :
						{
							"row" :
							{
								"parent" :
								{
									"body" :
									{
										"parent" :
										{
											"Grid" :
											{
												"class" :
												{
													"grd_LF_TreeGrd" :
													{
														"self" :
														{
															"enabled" :
															{
																"border" : nexacro.BorderObject("0px none"),
																"color" : nexacro.ColorObject("#a6a6a6")
															},
															"focused" :
															{
																"border" : nexacro.BorderObject("0px none"),
																"color" : nexacro.ColorObject("#a6a6a6")
															},
															"readonly" :
															{
																"border" : nexacro.BorderObject("0px none"),
																"color" : nexacro.ColorObject("#a6a6a6")
															},
															"blinked" :
															{
																"border" : nexacro.BorderObject("0px none"),
																"color" : nexacro.ColorObject("#a6a6a6")
															},
															"mouseover" :
															{
																"color" : nexacro.ColorObject("#c2c3c3")
															},
															"selected" :
															{
																"border" : nexacro.BorderObject("0px none"),
																"color" : nexacro.ColorObject("#c2c3c3"),
																"font" : nexacro.FontObject("bold 12px \"Verdana\"")
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					},
					"grd_LF_TreeGrd3D" :
					{
						"parent" :
						{
							"row" :
							{
								"parent" :
								{
									"body" :
									{
										"parent" :
										{
											"Grid" :
											{
												"class" :
												{
													"grd_LF_TreeGrd" :
													{
														"self" :
														{
															"enabled" :
															{
																"border" : nexacro.BorderObject("0px none"),
																"color" : nexacro.ColorObject("#a6a6a6")
															},
															"focused" :
															{
																"border" : nexacro.BorderObject("0px none"),
																"color" : nexacro.ColorObject("#a6a6a6")
															},
															"readonly" :
															{
																"border" : nexacro.BorderObject("0px none"),
																"color" : nexacro.ColorObject("#a6a6a6")
															},
															"blinked" :
															{
																"border" : nexacro.BorderObject("0px none"),
																"color" : nexacro.ColorObject("#a6a6a6")
															},
															"mouseover" :
															{
																"border" : nexacro.BorderObject("0px none"),
																"color" : nexacro.ColorObject("#94e2fd")
															},
															"selected" :
															{
																"border" : nexacro.BorderObject("0px none"),
																"color" : nexacro.ColorObject("#94e2fd"),
																"font" : nexacro.FontObject("bold 12px \"Verdana\"")
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					},
					"grd_LF_HistoryTit" :
					{
						"parent" :
						{
							"row" :
							{
								"parent" :
								{
									"body" :
									{
										"parent" :
										{
											"Grid" :
											{
												"class" :
												{
													"grd_LF_HistoryGrid" :
													{
														"self" :
														{
															"enabled" :
															{
																"border" : nexacro.BorderObject("0px none"),
																"padding" : nexacro.PaddingObject("0px 0px 0px 40px"),
																"color" : nexacro.ColorObject("#c2c3c3")
															},
															"focused" :
															{
																"border" : nexacro.BorderObject("0px none"),
																"padding" : nexacro.PaddingObject("0px 0px 0px 40px"),
																"color" : nexacro.ColorObject("#c2c3c3")
															},
															"mouseover" :
															{
																"border" : nexacro.BorderObject("0px none"),
																"color" : nexacro.ColorObject("#94e2fd"),
																"font" : nexacro.FontObject("bold 12px \"Verdana\"")
															},
															"selected" :
															{
																"border" : nexacro.BorderObject("0px none"),
																"color" : nexacro.ColorObject("#94e2fd"),
																"font" : nexacro.FontObject("bold 12px \"Verdana\"")
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					},
					"grd_LF_HistoryInfo" :
					{
						"parent" :
						{
							"row" :
							{
								"parent" :
								{
									"body" :
									{
										"parent" :
										{
											"Grid" :
											{
												"class" :
												{
													"grd_LF_HistoryGrid" :
													{
														"self" :
														{
															"enabled" :
															{
																"border" : nexacro.BorderObject("0px none"),
																"padding" : nexacro.PaddingObject("0px 20px 0px 0px"),
																"color" : nexacro.ColorObject("#c2c3c3"),
																"letterSpacing" : nexacro.CSSValueObject("0px")
															},
															"focused" :
															{
																"border" : nexacro.BorderObject("0px none"),
																"padding" : nexacro.PaddingObject("0px 20px 0px 0px"),
																"color" : nexacro.ColorObject("#c2c3c3"),
																"letterSpacing" : nexacro.CSSValueObject("0px")
															},
															"mouseover" :
															{
																"border" : nexacro.BorderObject("0px none"),
																"padding" : nexacro.PaddingObject("0px 20px 0px 0px"),
																"color" : nexacro.ColorObject("#94e2fd"),
																"font" : nexacro.FontObject("bold 12px \"Verdana\"")
															},
															"selected" :
															{
																"border" : nexacro.BorderObject("0px none"),
																"padding" : nexacro.PaddingObject("0px 20px 0px 0px"),
																"color" : nexacro.ColorObject("#94e2fd"),
																"font" : nexacro.FontObject("bold 12px \"Verdana\"")
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					},
					"grd_MWF_headColEditBL" :
					{
						"parent" :
						{
							"row" :
							{
								"parent" :
								{
									"head" :
									{
										"parent" :
										{
											"Grid" :
											{
												"self" :
												{
													"focused" :
													{
													},
													"mouseover" :
													{
													},
													"selected" :
													{
													},
													"disabled" :
													{
													},
													"readonly" :
													{
													},
													"blinked" :
													{
													}
												}
											}
										}
									}
								}
							}
						}
					},
					"grd_WF_BodyCellPadding" :
					{
						"parent" :
						{
							"row" :
							{
								"parent" :
								{
									"body" :
									{
										"parent" :
										{
											"Grid" :
											{
												"self" :
												{
													"enabled" :
													{
														"padding" : nexacro.PaddingObject("0px 6px")
													},
													"focused" :
													{
														"padding" : nexacro.PaddingObject("0px 6px")
													},
													"mouseover" :
													{
														"padding" : nexacro.PaddingObject("0px 6px")
													},
													"selected" :
													{
														"padding" : nexacro.PaddingObject("0px 6px")
													},
													"readonly" :
													{
														"padding" : nexacro.PaddingObject("0px 6px")
													}
												}
											}
										}
									}
								}
							}
						}
					},
					"grd_WF_07Cell" :
					{
						"parent" :
						{
							"row" :
							{
								"parent" :
								{
									"body" :
									{
										"parent" :
										{
											"Grid" :
											{
												"self" :
												{
													"enabled" :
													{
														"color" : nexacro.ColorObject("#00abe6")
													},
													"focused" :
													{
														"color" : nexacro.ColorObject("#00abe6")
													},
													"mouseover" :
													{
														"color" : nexacro.ColorObject("#00abe6")
													},
													"selected" :
													{
														"color" : nexacro.ColorObject("#00abe6")
													},
													"readonly" :
													{
														"color" : nexacro.ColorObject("#00abe6")
													}
												}
											}
										}
									}
								}
							}
						}
					},
					"grd_WF_07RedCell" :
					{
						"parent" :
						{
							"row" :
							{
								"parent" :
								{
									"body" :
									{
										"parent" :
										{
											"Grid" :
											{
												"self" :
												{
													"enabled" :
													{
														"color" : nexacro.ColorObject("#ba2b04")
													},
													"focused" :
													{
														"color" : nexacro.ColorObject("#ba2b04")
													},
													"mouseover" :
													{
														"color" : nexacro.ColorObject("#ba2b04")
													},
													"selected" :
													{
														"color" : nexacro.ColorObject("#ba2b04")
													},
													"readonly" :
													{
														"color" : nexacro.ColorObject("#ba2b04")
													}
												}
											}
										}
									}
								}
							}
						}
					},
					"grd_WF_BodyCellRed" :
					{
						"parent" :
						{
							"row" :
							{
								"parent" :
								{
									"body" :
									{
										"parent" :
										{
											"Grid" :
											{
												"self" :
												{
													"enabled" :
													{
														"color" : nexacro.ColorObject("red")
													}
												}
											}
										}
									}
								}
							}
						}
					},
					"grd_WF_BodyCellBlue" :
					{
						"parent" :
						{
							"row" :
							{
								"parent" :
								{
									"body" :
									{
										"parent" :
										{
											"Grid" :
											{
												"self" :
												{
													"enabled" :
													{
														"color" : nexacro.ColorObject("blue")
													}
												}
											}
										}
									}
								}
							}
						}
					},
					"grd_WF_BodyCellGreen" :
					{
						"parent" :
						{
							"row" :
							{
								"parent" :
								{
									"body" :
									{
										"parent" :
										{
											"Grid" :
											{
												"self" :
												{
													"enabled" :
													{
														"color" : nexacro.ColorObject("green")
													}
												}
											}
										}
									}
								}
							}
						}
					},
					"grd_MAIN_NewTit" :
					{
						"parent" :
						{
							"row" :
							{
								"parent" :
								{
									"body" :
									{
										"parent" :
										{
											"Grid" :
											{
												"class" :
												{
													"grd_MAIN_ListGrid" :
													{
														"self" :
														{
															"enabled" :
															{
																"border" : nexacro.BorderObject("0px none"),
																"padding" : nexacro.PaddingObject("0px 0px 0px 20px")
															},
															"focused" :
															{
																"border" : nexacro.BorderObject("0px none"),
																"padding" : nexacro.PaddingObject("0px 0px 0px 20px")
															},
															"mouseover" :
															{
																"border" : nexacro.BorderObject("0px none"),
																"font" : nexacro.FontObject("bold 12px \"Verdana\"")
															},
															"selected" :
															{
																"border" : nexacro.BorderObject("0px none"),
																"font" : nexacro.FontObject("bold 12px \"Verdana\"")
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					},
					"grd_MAIN_BoardTit" :
					{
						"parent" :
						{
							"row" :
							{
								"parent" :
								{
									"body" :
									{
										"parent" :
										{
											"Grid" :
											{
												"class" :
												{
													"grd_MAIN_ListGrid" :
													{
														"self" :
														{
															"enabled" :
															{
																"border" : nexacro.BorderObject("0px none"),
																"padding" : nexacro.PaddingObject("0px 0px 0px 9px")
															},
															"focused" :
															{
																"border" : nexacro.BorderObject("0px none"),
																"padding" : nexacro.PaddingObject("0px 0px 0px 9px")
															},
															"mouseover" :
															{
																"border" : nexacro.BorderObject("0px none"),
																"font" : nexacro.FontObject("bold 12px \"Verdana\"")
															},
															"selected" :
															{
																"border" : nexacro.BorderObject("0px none"),
																"font" : nexacro.FontObject("bold 12px \"Verdana\"")
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					},
					"grd_MAIN_Date" :
					{
						"parent" :
						{
							"row" :
							{
								"parent" :
								{
									"body" :
									{
										"parent" :
										{
											"Grid" :
											{
												"class" :
												{
													"grd_MAIN_ListGrid" :
													{
														"self" :
														{
															"enabled" :
															{
																"border" : nexacro.BorderObject("0px none"),
																"padding" : nexacro.PaddingObject("0px 0px 0px 0px"),
																"color" : nexacro.ColorObject("#999999"),
																"letterSpacing" : nexacro.CSSValueObject("-0.5px")
															},
															"focused" :
															{
																"border" : nexacro.BorderObject("0px none"),
																"padding" : nexacro.PaddingObject("0px 0px 0px 0px"),
																"color" : nexacro.ColorObject("#999999"),
																"letterSpacing" : nexacro.CSSValueObject("-0.5px")
															},
															"mouseover" :
															{
															},
															"selected" :
															{
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					},
					"grd_MAIN_FaqTit" :
					{
						"parent" :
						{
							"row" :
							{
								"parent" :
								{
									"body" :
									{
										"parent" :
										{
											"Grid" :
											{
												"class" :
												{
													"grd_MAIN_ListGrid" :
													{
														"self" :
														{
															"enabled" :
															{
																"border" : nexacro.BorderObject("0px none"),
																"padding" : nexacro.PaddingObject("0px 0px 0px 9px")
															},
															"focused" :
															{
																"border" : nexacro.BorderObject("0px none"),
																"padding" : nexacro.PaddingObject("0px 0px 0px 9px")
															},
															"mouseover" :
															{
																"border" : nexacro.BorderObject("0px none"),
																"font" : nexacro.FontObject("bold 12px \"Verdana\"")
															},
															"selected" :
															{
																"border" : nexacro.BorderObject("0px none"),
																"font" : nexacro.FontObject("bold 12px \"Verdana\"")
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					},
					"grd_MAIN_FaqIcon" :
					{
						"parent" :
						{
							"row" :
							{
								"parent" :
								{
									"body" :
									{
										"parent" :
										{
											"Grid" :
											{
												"class" :
												{
													"grd_MAIN_ListGrid" :
													{
														"self" :
														{
															"enabled" :
															{
																"border" : nexacro.BorderObject("0px none"),
																"padding" : nexacro.PaddingObject("7px 0px 7px 0px"),
																"color" : nexacro.ColorObject("#999999"),
																"letterSpacing" : nexacro.CSSValueObject("-0.5px")
															},
															"focused" :
															{
																"border" : nexacro.BorderObject("0px none"),
																"padding" : nexacro.PaddingObject("7px 0px 7px 0px"),
																"color" : nexacro.ColorObject("#999999"),
																"letterSpacing" : nexacro.CSSValueObject("-0.5px")
															},
															"mouseover" :
															{
																"border" : nexacro.BorderObject("0px none"),
																"padding" : nexacro.PaddingObject("7px 0px 7px 0px"),
																"color" : nexacro.ColorObject("#999999"),
																"letterSpacing" : nexacro.CSSValueObject("-0.5px")
															},
															"selected" :
															{
																"border" : nexacro.BorderObject("0px none"),
																"padding" : nexacro.PaddingObject("7px 0px 7px 0px"),
																"color" : nexacro.ColorObject("#999999"),
																"letterSpacing" : nexacro.CSSValueObject("-0.5px")
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			},
			"body" :
			{
				"parent" :
				{
					"Grid" :
					{
						"self" :
						{
							"focused" :
							{
							},
							"mouseover" :
							{
							},
							"readonly" :
							{
							}
						}
					}
				}
			},
			"summary" :
			{
				"parent" :
				{
					"Grid" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("1px solid #a1d9e9, 0px none, 0px none, 0px none")
							},
							"focused" :
							{
								"border" : nexacro.BorderObject("1px solid #a1d9e9, 0px none, 0px none, 0px none")
							},
							"mouseover" :
							{
								"border" : nexacro.BorderObject("1px solid #a1d9e9, 0px none, 0px none, 0px none")
							},
							"disabled" :
							{
								"border" : nexacro.BorderObject("1px solid #a1d9e9, 0px none, 0px none, 0px none")
							},
							"readonly" :
							{
								"border" : nexacro.BorderObject("1px solid #a1d9e9, 0px none, 0px none, 0px none")
							}
						}
					}
				}
			},
			"cellcheckbox" :
			{
				"parent" :
				{
					"GridCellControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/chk_WF_chkBoxN.png\")"),
								"textPadding" : nexacro.PaddingObject("0px 0px 0px 6px")
							},
							"mouseover" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/chk_WF_chkBoxM.png\")")
							},
							"selected" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/chk_WF_chkBoxS.png\")")
							},
							"mouseover_selected" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/chk_WF_chkBoxMS.png\")")
							}
						}
					}
				}
			},
			"celledit" :
			{
				"parent" :
				{
					"GridCellControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("1px solid #c8c8c8"),
								"padding" : nexacro.PaddingObject("0px 5px 1px 5px")
							},
							"mouseover" :
							{
								"border" : nexacro.BorderObject("1px solid #006cb7")
							},
							"focused" :
							{
								"border" : nexacro.BorderObject("1px solid #006cb7")
							},
							"disabled" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"color" : nexacro.ColorObject("#afafaf")
							},
							"readonly" :
							{
							},
							"nulltext" :
							{
								"color" : nexacro.ColorObject("#d0d0d0")
							}
						}
					}
				}
			},
			"celltextarea" :
			{
				"parent" :
				{
					"GridCellControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("1px solid #c8c8c8"),
								"padding" : nexacro.PaddingObject("0px 5px 1px 5px")
							},
							"mouseover" :
							{
								"border" : nexacro.BorderObject("1px solid #006cb7")
							},
							"focused" :
							{
								"border" : nexacro.BorderObject("1px solid #006cb7")
							},
							"disabled" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"color" : nexacro.ColorObject("#afafaf")
							},
							"readonly" :
							{
							},
							"nulltext" :
							{
								"color" : nexacro.ColorObject("#d0d0d0")
							}
						}
					}
				}
			},
			"cellcombo" :
			{
				"parent" :
				{
					"GridCellControl" :
					{
						"self" :
						{
							"mouseover" :
							{
								"border" : nexacro.BorderObject("1px solid #006cb7")
							},
							"focused" :
							{
								"border" : nexacro.BorderObject("1px solid #006cb7")
							},
							"enabled" :
							{
								"border" : nexacro.BorderObject("1px solid #c8c8c8")
							}
						}
					}
				}
			},
			"cellcalendar" :
			{
				"parent" :
				{
					"GridCellControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("1px solid #c8c8c8")
							},
							"mouseover" :
							{
								"border" : nexacro.BorderObject("1px solid #006cb7")
							},
							"focused" :
							{
								"border" : nexacro.BorderObject("1px solid #006cb7")
							},
							"disabled" :
							{
								"color" : nexacro.ColorObject("#afafaf")
							},
							"readonly" :
							{
								"border" : nexacro.BorderObject("1px solid #d3d3d3")
							}
						}
					}
				}
			},
			"cellbutton" :
			{
				"parent" :
				{
					"GridCellControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("1px solid #e7e7e7"),
								"color" : nexacro.ColorObject("#666666"),
								"font" : nexacro.FontObject("12px \"Verdana\"")
							},
							"focused" :
							{
								"border" : nexacro.BorderObject("1px solid #e7e7e7"),
								"color" : nexacro.ColorObject("#666666"),
								"font" : nexacro.FontObject("12px \"Verdana\"")
							},
							"selected" :
							{
								"border" : nexacro.BorderObject("1px solid #e7e7e7"),
								"color" : nexacro.ColorObject("#666666"),
								"font" : nexacro.FontObject("12px \"Verdana\"")
							},
							"mouseover" :
							{
								"border" : nexacro.BorderObject("1px solid #c8c8c8"),
								"color" : nexacro.ColorObject("#006cb7")
							},
							"pushed" :
							{
								"border" : nexacro.BorderObject("1px solid #b1b1b1"),
								"color" : nexacro.ColorObject("#006cb7")
							},
							"disabled" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"color" : nexacro.ColorObject("#afafaf")
							}
						}
					},
					"cell" :
					{
						"class" :
						{
							"grd_MAIN_FaqIcon" :
							{
								"parent" :
								{
									"row" :
									{
										"parent" :
										{
											"body" :
											{
												"parent" :
												{
													"Grid" :
													{
														"class" :
														{
															"grd_MAIN_ListGrid" :
															{
																"self" :
																{
																	"enabled" :
																	{
																		"border" : nexacro.BorderObject("0px none"),
																		"color" : nexacro.ColorObject("#ffffff")
																	}
																}
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			},
			"celltreeitem" :
			{
				"parent" :
				{
					"GridCellControl" :
					{
						"self" :
						{
							"focused" :
							{
							},
							"mouseover" :
							{
							}
						}
					},
					"cell" :
					{
						"parent" :
						{
							"row" :
							{
								"parent" :
								{
									"body" :
									{
										"parent" :
										{
											"Grid" :
											{
												"class" :
												{
													"grd_LF_TreeGrd" :
													{
														"self" :
														{
															"enabled" :
															{
																"border" : nexacro.BorderObject("0px none, 0px none, 0px none, 16px solid transparent")
															},
															"mouseover" :
															{
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			},
			"treeitembutton" :
			{
				"parent" :
				{
					"celltreeitem" :
					{
						"parent" :
						{
							"GridCellControl" :
							{
								"self" :
								{
									"collapse" :
									{
										"icon" : nexacro.UrlObject("URL(\"theme://images/grd_WF_TreeBtnCollapse.png\")")
									},
									"expand" :
									{
										"icon" : nexacro.UrlObject("URL(\"theme://images/grd_WF_TreeBtnExpand.png\")")
									},
									"leaf" :
									{
										"icon" : nexacro.UrlObject("URL(\"theme://images/grd_WF_TreeImgItem.png\")")
									}
								}
							},
							"cell" :
							{
								"parent" :
								{
									"row" :
									{
										"parent" :
										{
											"body" :
											{
												"parent" :
												{
													"Grid" :
													{
														"class" :
														{
															"grd_LF_TreeGrd" :
															{
																"self" :
																{
																	"collapse" :
																	{
																		"icon" : nexacro.UrlObject("URL(\"theme://images/grd_LF_menuSubIconC.png\")")
																	},
																	"expand" :
																	{
																		"icon" : nexacro.UrlObject("URL(\"theme://images/grd_LF_menuSubIconE.png\")")
																	}
																}
															}
														}
													}
												}
											}
										}
									}
								},
								"class" :
								{
									"grd_LF_TreeGrd2D" :
									{
										"parent" :
										{
											"row" :
											{
												"parent" :
												{
													"body" :
													{
														"parent" :
														{
															"Grid" :
															{
																"class" :
																{
																	"grd_LF_TreeGrd" :
																	{
																		"self" :
																		{
																			"collapse" :
																			{
																				"icon" : nexacro.UrlObject("URL(\"theme://images/grd_LF_menu3depthC.png\")")
																			},
																			"expand" :
																			{
																				"icon" : nexacro.UrlObject("URL(\"theme://images/grd_LF_menu3depthE.png\")")
																			}
																		}
																	}
																}
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			},
			"treeitemcheckbox" :
			{
				"parent" :
				{
					"celltreeitem" :
					{
						"parent" :
						{
							"GridCellControl" :
							{
								"self" :
								{
									"enabled" :
									{
										"icon" : nexacro.UrlObject("URL(\"theme://images/chk_WF_chkBoxN.png\")")
									}
								}
							}
						}
					}
				}
			},
			"treeitemimage" :
			{
				"parent" :
				{
					"celltreeitem" :
					{
						"parent" :
						{
							"GridCellControl" :
							{
								"self" :
								{
									"enabled" :
									{
										"icon" : nexacro.UrlObject("URL(\"theme://images/grd_WF_TreeImgItem.png\")")
									},
									"collapse" :
									{
										"icon" : nexacro.UrlObject("URL(\"theme://images/grd_WF_TreeImgCollapse.png\")")
									},
									"expand" :
									{
										"icon" : nexacro.UrlObject("URL(\"theme://images/grd_WF_TreeImgExpand.png\")")
									}
								}
							}
						}
					}
				}
			},
			"celltreeline" :
			{
				"parent" :
				{
					"GridCellControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("1px dotted #c7c7c7")
							}
						}
					}
				}
			},
			"GroupBox" :
			{
				"self" :
				{
					"mouseover" :
					{
					},
					"disabled" :
					{
					}
				}
			},
			"groupboxcontents" :
			{
				"parent" :
				{
					"GroupBox" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("1px solid #c8c8c8")
							},
							"mouseover" :
							{
								"border" : nexacro.BorderObject("1px solid #c8c8c8")
							},
							"disabled" :
							{
								"border" : nexacro.BorderObject("0px none")
							}
						}
					}
				}
			},
			"groupboxtitle" :
			{
				"parent" :
				{
					"GroupBox" :
					{
						"self" :
						{
							"enabled" :
							{
								"color" : nexacro.ColorObject("#006cb7")
							},
							"mouseover" :
							{
								"color" : nexacro.ColorObject("#006cb7")
							},
							"disabled" :
							{
								"color" : nexacro.ColorObject("#afafaf")
							}
						}
					}
				}
			},
			"ImageViewer" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("1px solid #f2f2f2")
					},
					"mouseover" :
					{
						"border" : nexacro.BorderObject("1px solid #f2f2f2")
					},
					"focused" :
					{
						"border" : nexacro.BorderObject("1px solid #f2f2f2")
					},
					"disabled" :
					{
						"border" : nexacro.BorderObject("0px none"),
						"color" : nexacro.ColorObject("#afafaf")
					}
				},
				"class" :
				{
					"img_LF_Logo" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("0px none")
							},
							"mouseover" :
							{
								"border" : nexacro.BorderObject("0px none")
							},
							"focused" :
							{
								"border" : nexacro.BorderObject("0px none")
							}
						}
					},
					"img_LF_LogId" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("0px none")
							},
							"mouseover" :
							{
								"border" : nexacro.BorderObject("0px none")
							},
							"focused" :
							{
								"border" : nexacro.BorderObject("0px none")
							}
						}
					},
					"img_LF_LogPwd" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("0px none")
							},
							"mouseover" :
							{
								"border" : nexacro.BorderObject("0px none")
							},
							"focused" :
							{
								"border" : nexacro.BorderObject("0px none")
							}
						}
					},
					"img_TF_Person" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("0px none")
							},
							"mouseover" :
							{
								"border" : nexacro.BorderObject("0px none")
							},
							"focused" :
							{
								"border" : nexacro.BorderObject("0px none")
							}
						}
					},
					"img_TF_Bg" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("0px none")
							},
							"mouseover" :
							{
								"border" : nexacro.BorderObject("0px none")
							},
							"focused" :
							{
								"border" : nexacro.BorderObject("0px none")
							}
						}
					}
				}
			},
			"Sketch" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("1px solid #f2f2f2")
					},
					"mouseover" :
					{
						"border" : nexacro.BorderObject("1px solid #f2f2f2")
					},
					"focused" :
					{
						"border" : nexacro.BorderObject("1px solid #f2f2f2")
					},
					"readonly" :
					{
						"border" : nexacro.BorderObject("1px solid #f2f2f2")
					},
					"disabled" :
					{
						"border" : nexacro.BorderObject("0px none"),
						"color" : nexacro.ColorObject("#afafaf")
					}
				}
			},
			"ListBox" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("1px solid #c8c8c8")
					},
					"mouseover" :
					{
						"border" : nexacro.BorderObject("1px solid #c8c8c8")
					},
					"focused" :
					{
						"border" : nexacro.BorderObject("1px solid #c8c8c8")
					},
					"disabled" :
					{
						"border" : nexacro.BorderObject("0px none"),
						"color" : nexacro.ColorObject("#afafaf")
					}
				}
			},
			"ListBoxControl" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("1px solid #c8c8c8")
					},
					"mouseover" :
					{
						"border" : nexacro.BorderObject("1px solid #c8c8c8")
					},
					"focused" :
					{
						"border" : nexacro.BorderObject("1px solid #c8c8c8")
					},
					"disabled" :
					{
						"border" : nexacro.BorderObject("0px none"),
						"color" : nexacro.ColorObject("#afafaf")
					}
				}
			},
			"MaskEdit" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("1px solid #c8c8c8"),
						"padding" : nexacro.PaddingObject("0px 5px 1px 5px"),
						"letterSpacing" : nexacro.CSSValueObject("-0.5px")
					},
					"nulltext" :
					{
						"color" : nexacro.ColorObject("#afafaf")
					},
					"mouseover" :
					{
						"border" : nexacro.BorderObject("1px solid #006cb7")
					},
					"focused" :
					{
						"border" : nexacro.BorderObject("1px solid #006cb7")
					},
					"readonly" :
					{
					},
					"disabled" :
					{
						"border" : nexacro.BorderObject("0px none"),
						"color" : nexacro.ColorObject("#afafaf")
					}
				},
				"class" :
				{
					"com_WF_Essential" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("1px solid #39b54a")
							}
						}
					}
				}
			},
			"Menu" :
			{
				"self" :
				{
					"enabled" :
					{
						"padding" : nexacro.PaddingObject("0px 12px 0px 12px")
					},
					"mouseover" :
					{
						"padding" : nexacro.PaddingObject("0px 12px 0px 12px")
					},
					"focused" :
					{
						"padding" : nexacro.PaddingObject("0px 12px 0px 12px")
					},
					"disabled" :
					{
						"padding" : nexacro.PaddingObject("0px 12px 0px 12px")
					}
				}
			},
			"menuitem" :
			{
				"parent" :
				{
					"Menu" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px 8px"),
								"color" : nexacro.ColorObject("#c7e6fc"),
								"font" : nexacro.FontObject("bold 13px \"Verdana\"")
							},
							"focused" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px 8px"),
								"color" : nexacro.ColorObject("#c7e6fc"),
								"font" : nexacro.FontObject("bold 13px \"Verdana\"")
							},
							"mouseover" :
							{
								"color" : nexacro.ColorObject("#ffffff")
							},
							"selected" :
							{
								"color" : nexacro.ColorObject("#ffffff")
							},
							"disabled" :
							{
								"color" : nexacro.ColorObject("#005996")
							}
						}
					}
				}
			},
			"menupopupmenu" :
			{
				"parent" :
				{
					"Menu" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("1px solid #c8c8c8")
							},
							"mouseover" :
							{
								"border" : nexacro.BorderObject("1px solid #c8c8c8")
							},
							"disabled" :
							{
								"color" : nexacro.ColorObject("#afafaf")
							}
						}
					}
				}
			},
			"popupmenuitem" :
			{
				"parent" :
				{
					"menupopupmenu" :
					{
						"parent" :
						{
							"Menu" :
							{
								"self" :
								{
									"enabled" :
									{
										"border" : nexacro.BorderObject("0px none"),
										"padding" : nexacro.PaddingObject("8px 5px 8px 5px")
									},
									"focused" :
									{
										"color" : nexacro.ColorObject("#666666")
									},
									"mouseover" :
									{
										"color" : nexacro.ColorObject("#666666")
									},
									"selected" :
									{
										"color" : nexacro.ColorObject("#ffffff")
									},
									"mouseover_selected" :
									{
										"color" : nexacro.ColorObject("#ffffff")
									},
									"disabled" :
									{
										"color" : nexacro.ColorObject("#afafaf")
									}
								}
							}
						}
					},
					"PopupMenu" :
					{
						"self" :
						{
							"enabled" :
							{
								"padding" : nexacro.PaddingObject("5px 5px 5px 10px")
							},
							"mouseover" :
							{
							},
							"selected" :
							{
							}
						}
					},
					"PopupMenuControl" :
					{
						"self" :
						{
							"mouseover" :
							{
							},
							"selected" :
							{
							}
						}
					}
				}
			},
			"popupmenuitemcheckbox" :
			{
				"parent" :
				{
					"popupmenuitem" :
					{
						"parent" :
						{
							"menupopupmenu" :
							{
								"parent" :
								{
									"Menu" :
									{
										"self" :
										{
											"disabled" :
											{
											}
										}
									}
								}
							},
							"PopupMenu" :
							{
								"self" :
								{
									"mouseover" :
									{
									},
									"disabled" :
									{
									}
								}
							}
						}
					}
				}
			},
			"popupmenuitemexpandimage" :
			{
				"parent" :
				{
					"popupmenuitem" :
					{
						"parent" :
						{
							"menupopupmenu" :
							{
								"parent" :
								{
									"Menu" :
									{
										"self" :
										{
											"enabled" :
											{
												"icon" : nexacro.UrlObject("URL(\"theme://images/btn_AF_midRightN.png\")")
											},
											"mouseover" :
											{
												"icon" : nexacro.UrlObject("URL(\"theme://images/btn_AF_midRightM.png\")")
											},
											"disabled" :
											{
												"icon" : nexacro.UrlObject("URL(\"theme://images/btn_AF_midRightD.png\")")
											}
										}
									}
								}
							},
							"PopupMenu" :
							{
								"self" :
								{
									"enabled" :
									{
										"icon" : nexacro.UrlObject("URL(\"theme://images/btn_AF_midRightN.png\")")
									},
									"mouseover" :
									{
										"icon" : nexacro.UrlObject("URL(\"theme://images/btn_AF_midRightN.png\")")
									},
									"disabled" :
									{
										"icon" : nexacro.UrlObject("URL(\"theme://images/btn_AF_midRightN.png\")")
									}
								}
							}
						}
					}
				}
			},
			"popupmenuitemhotkeytext" :
			{
				"parent" :
				{
					"popupmenuitem" :
					{
						"parent" :
						{
							"menupopupmenu" :
							{
								"parent" :
								{
									"Menu" :
									{
										"self" :
										{
											"enabled" :
											{
												"padding" : nexacro.PaddingObject("0px 5px 0px 0px"),
												"color" : nexacro.ColorObject("#c6c6c6")
											},
											"disabled" :
											{
												"padding" : nexacro.PaddingObject("0px 5px 0px 0px"),
												"color" : nexacro.ColorObject("#c6c6c6")
											},
											"mouseover" :
											{
												"color" : nexacro.ColorObject("#ffffff")
											}
										}
									}
								}
							},
							"PopupMenu" :
							{
								"self" :
								{
									"enabled" :
									{
										"padding" : nexacro.PaddingObject("0px 4px 0px 0px"),
										"color" : nexacro.ColorObject("#c6c6c6")
									},
									"mouseover" :
									{
										"padding" : nexacro.PaddingObject("0px 4px 0px 0px"),
										"color" : nexacro.ColorObject("#c6c6c6")
									},
									"disabled" :
									{
										"padding" : nexacro.PaddingObject("0px 4px 0px 0px"),
										"color" : nexacro.ColorObject("#c6c6c6")
									}
								}
							}
						}
					}
				}
			},
			"popupmenuitemicon" :
			{
				"parent" :
				{
					"popupmenuitem" :
					{
						"parent" :
						{
							"menupopupmenu" :
							{
								"parent" :
								{
									"Menu" :
									{
										"self" :
										{
											"mouseover" :
											{
											},
											"disabled" :
											{
											}
										}
									}
								}
							}
						}
					}
				}
			},
			"popupmenuitemtext" :
			{
				"parent" :
				{
					"popupmenuitem" :
					{
						"parent" :
						{
							"menupopupmenu" :
							{
								"parent" :
								{
									"Menu" :
									{
										"self" :
										{
											"enabled" :
											{
												"padding" : nexacro.PaddingObject("0px 16px 0px 5px")
											},
											"mouseover" :
											{
												"padding" : nexacro.PaddingObject("0px 16px 0px 5px")
											},
											"disabled" :
											{
												"color" : nexacro.ColorObject("#d6d6d6")
											}
										}
									}
								}
							},
							"PopupMenu" :
							{
								"self" :
								{
									"enabled" :
									{
										"padding" : nexacro.PaddingObject("0px 16px 0px 5px")
									}
								}
							}
						}
					}
				}
			},
			"PopupMenu" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("1px solid #8e8e8e"),
						"color" : nexacro.ColorObject("#000000")
					},
					"mouseover" :
					{
						"border" : nexacro.BorderObject("1px solid #8e8e8e"),
						"color" : nexacro.ColorObject("#000000")
					},
					"disabled" :
					{
						"border" : nexacro.BorderObject("1px solid #8e8e8e"),
						"color" : nexacro.ColorObject("#000000")
					}
				}
			},
			"PopupMenuControl" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("1px solid #8e8e8e"),
						"color" : nexacro.ColorObject("#000000")
					},
					"mouseover" :
					{
						"border" : nexacro.BorderObject("1px solid #8e8e8e"),
						"color" : nexacro.ColorObject("#000000")
					},
					"disabled" :
					{
						"border" : nexacro.BorderObject("1px solid #8e8e8e"),
						"color" : nexacro.ColorObject("#000000")
					}
				}
			},
			"ProgressBar" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("0px none")
					},
					"focused" :
					{
						"border" : nexacro.BorderObject("0px none")
					},
					"mouseover" :
					{
						"border" : nexacro.BorderObject("0px none")
					},
					"disabled" :
					{
						"border" : nexacro.BorderObject("0px none")
					}
				}
			},
			"Radio" :
			{
				"self" :
				{
					"enabled" :
					{
						"padding" : nexacro.PaddingObject("0px")
					},
					"focused" :
					{
						"padding" : nexacro.PaddingObject("0px")
					},
					"mouseover" :
					{
						"padding" : nexacro.PaddingObject("0px")
					},
					"readonly" :
					{
						"padding" : nexacro.PaddingObject("0px")
					}
				}
			},
			"radioitem" :
			{
				"parent" :
				{
					"Radio" :
					{
						"self" :
						{
							"enabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/rdo_WF_radioBtnN.png\")"),
								"textPadding" : nexacro.PaddingObject("0px 6px 0px 6px")
							},
							"readonly" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/rdo_WF_radioBtnN.png\")"),
								"textPadding" : nexacro.PaddingObject("0px 6px 0px 6px")
							},
							"mouseover" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/rdo_WF_radioBtnM.png\")")
							},
							"selected" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/rdo_WF_radioBtnS.png\")")
							},
							"disabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/rdo_WF_radioBtnD.png\")"),
								"color" : nexacro.ColorObject("#afafaf")
							},
							"mouseover_selected" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/rdo_WF_radioBtnMS.png\")")
							},
							"disabled_selected" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/rdo_WF_radioBtnDS.png\")"),
								"color" : nexacro.ColorObject("#afafaf")
							}
						}
					}
				}
			},
			"Spin" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("1px solid #c8c8c8")
					},
					"mouseover" :
					{
						"border" : nexacro.BorderObject("1px solid #006cb7")
					},
					"focused" :
					{
						"border" : nexacro.BorderObject("1px solid #006cb7")
					},
					"readonly" :
					{
					},
					"disabled" :
					{
						"border" : nexacro.BorderObject("0px none"),
						"color" : nexacro.ColorObject("#afafaf")
					}
				},
				"class" :
				{
					"com_WF_Essential" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("1px solid #39b54a")
							}
						}
					}
				}
			},
			"spinedit" :
			{
				"parent" :
				{
					"Spin" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px 5px 1px 5px"),
								"letterSpacing" : nexacro.CSSValueObject("0px")
							},
							"mouseover" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px 5px 1px 5px"),
								"letterSpacing" : nexacro.CSSValueObject("0px")
							},
							"focused" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px 5px 1px 5px"),
								"letterSpacing" : nexacro.CSSValueObject("0px")
							},
							"readonly" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px 5px 1px 5px"),
								"letterSpacing" : nexacro.CSSValueObject("0px")
							},
							"disabled" :
							{
								"border" : nexacro.BorderObject("0px none")
							},
							"nulltext" :
							{
								"color" : nexacro.ColorObject("#d0d0d0")
							}
						}
					}
				}
			},
			"StepControl" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("0px none")
					},
					"mouseover" :
					{
						"border" : nexacro.BorderObject("0px none")
					},
					"focused" :
					{
						"border" : nexacro.BorderObject("0px none")
					},
					"disabled" :
					{
						"border" : nexacro.BorderObject("0px none")
					}
				}
			},
			"stepitem" :
			{
				"parent" :
				{
					"StepControl" :
					{
						"self" :
						{
							"mouseover" :
							{
								"border" : nexacro.BorderObject("2px solid #ffffff")
							},
							"focused" :
							{
								"border" : nexacro.BorderObject("2px solid #ffffff")
							},
							"pushed" :
							{
								"border" : nexacro.BorderObject("2px solid #ffffff")
							},
							"selected" :
							{
								"border" : nexacro.BorderObject("2px solid #ffffff")
							},
							"disabled" :
							{
								"border" : nexacro.BorderObject("2px solid #ffffff")
							}
						}
					}
				}
			},
			"Static" :
			{
				"self" :
				{
					"enabled" :
					{
						"padding" : nexacro.PaddingObject("0px 3px 0px 3px"),
						"color" : nexacro.ColorObject("#666666"),
						"font" : nexacro.FontObject("normal 12px/18px \"Verdana\"")
					},
					"mouseover" :
					{
						"padding" : nexacro.PaddingObject("0px 3px 0px 3px"),
						"color" : nexacro.ColorObject("#666666"),
						"font" : nexacro.FontObject("normal 12px/18px \"Verdana\"")
					},
					"disabled" :
					{
						"color" : nexacro.ColorObject("#afafaf")
					}
				},
				"class" :
				{
					"sta_TF_LoginName" :
					{
						"self" :
						{
							"enabled" :
							{
								"color" : nexacro.ColorObject("#a2a2a2"),
								"font" : nexacro.FontObject("bold 12px/12px \"Verdana\"")
							},
							"mouseover" :
							{
								"color" : nexacro.ColorObject("#a2a2a2"),
								"font" : nexacro.FontObject("bold 12px/12px \"Verdana\"")
							},
							"disabled" :
							{
								"color" : nexacro.ColorObject("#a2a2a2"),
								"font" : nexacro.FontObject("bold 12px/12px \"Verdana\"")
							}
						}
					},
					"btn_LF_MenuTitle" :
					{
						"self" :
						{
							"enabled" :
							{
								"padding" : nexacro.PaddingObject("0px 0px 1px 15px"),
								"color" : nexacro.ColorObject("#f2f2f2"),
								"font" : nexacro.FontObject("bold 14px \"Verdana\"")
							},
							"mouseover" :
							{
								"padding" : nexacro.PaddingObject("0px 0px 1px 15px"),
								"color" : nexacro.ColorObject("#f2f2f2"),
								"font" : nexacro.FontObject("bold 14px \"Verdana\"")
							},
							"disabled" :
							{
								"padding" : nexacro.PaddingObject("0px 0px 1px 15px"),
								"color" : nexacro.ColorObject("#f2f2f2"),
								"font" : nexacro.FontObject("bold 14px \"Verdana\"")
							}
						}
					},
					"sta_WF_Btitle" :
					{
						"self" :
						{
							"enabled" :
							{
								"color" : nexacro.ColorObject("#000000"),
								"font" : nexacro.FontObject("bold 13px/13px \"Verdana\"")
							},
							"mouseover" :
							{
								"color" : nexacro.ColorObject("#000000"),
								"font" : nexacro.FontObject("bold 13px/13px \"Verdana\"")
							},
							"disabled" :
							{
								"color" : nexacro.ColorObject("#000000"),
								"font" : nexacro.FontObject("bold 13px/13px \"Verdana\"")
							}
						}
					},
					"sta_WF_Mtitle" :
					{
						"self" :
						{
							"enabled" :
							{
								"padding" : nexacro.PaddingObject("0px 0px 0px 14px"),
								"color" : nexacro.ColorObject("#113367"),
								"font" : nexacro.FontObject("bold 12px/12px \"Verdana\"")
							},
							"mouseover" :
							{
								"padding" : nexacro.PaddingObject("0px 0px 0px 14px"),
								"color" : nexacro.ColorObject("#113367"),
								"font" : nexacro.FontObject("bold 12px/12px \"Verdana\"")
							},
							"disabled" :
							{
								"padding" : nexacro.PaddingObject("0px 0px 0px 14px"),
								"color" : nexacro.ColorObject("#113367"),
								"font" : nexacro.FontObject("bold 12px/12px \"Verdana\"")
							}
						}
					},
					"sta_WF_Stitle" :
					{
						"self" :
						{
							"enabled" :
							{
								"padding" : nexacro.PaddingObject("0px 0px 0px 7px"),
								"color" : nexacro.ColorObject("#113367"),
								"font" : nexacro.FontObject("bold 12px/12px \"Verdana\"")
							},
							"mouseover" :
							{
								"padding" : nexacro.PaddingObject("0px 0px 0px 7px"),
								"color" : nexacro.ColorObject("#113367"),
								"font" : nexacro.FontObject("bold 12px/12px \"Verdana\"")
							},
							"disabled" :
							{
								"padding" : nexacro.PaddingObject("0px 0px 0px 7px"),
								"color" : nexacro.ColorObject("#113367"),
								"font" : nexacro.FontObject("bold 12px/12px \"Verdana\"")
							}
						}
					},
					"sta_WF_FieldLabel" :
					{
						"self" :
						{
							"enabled" :
							{
								"color" : nexacro.ColorObject("#777777"),
								"font" : nexacro.FontObject("normal 12px/12px \"Verdana\"")
							},
							"mouseover" :
							{
								"color" : nexacro.ColorObject("#777777"),
								"font" : nexacro.FontObject("normal 12px/12px \"Verdana\"")
							},
							"disabled" :
							{
								"color" : nexacro.ColorObject("#777777"),
								"font" : nexacro.FontObject("normal 12px/12px \"Verdana\"")
							}
						}
					},
					"sta_WF_SeaFieldLabel" :
					{
						"self" :
						{
							"enabled" :
							{
								"padding" : nexacro.PaddingObject("0px 0px 0px 10px"),
								"color" : nexacro.ColorObject("#5d5d5d"),
								"font" : nexacro.FontObject("bold 12px/12px \"Verdana\"")
							},
							"mouseover" :
							{
								"padding" : nexacro.PaddingObject("0px 0px 0px 10px"),
								"color" : nexacro.ColorObject("#5d5d5d"),
								"font" : nexacro.FontObject("bold 12px/12px \"Verdana\"")
							},
							"disabled" :
							{
								"padding" : nexacro.PaddingObject("0px 0px 0px 10px"),
								"color" : nexacro.ColorObject("#5d5d5d"),
								"font" : nexacro.FontObject("bold 12px/12px \"Verdana\"")
							}
						}
					},
					"sta_WF_ResultLabel" :
					{
						"self" :
						{
							"enabled" :
							{
								"color" : nexacro.ColorObject("#00abe6"),
								"font" : nexacro.FontObject("bold 12px/12px \"Verdana\"")
							},
							"mouseover" :
							{
								"color" : nexacro.ColorObject("#00abe6"),
								"font" : nexacro.FontObject("bold 12px/12px \"Verdana\"")
							},
							"disabled" :
							{
								"color" : nexacro.ColorObject("#00abe6"),
								"font" : nexacro.FontObject("bold 12px/12px \"Verdana\"")
							}
						}
					},
					"sta_WF_BoxWhiteB" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("1px solid #d3d3d3")
							},
							"mouseover" :
							{
								"border" : nexacro.BorderObject("1px solid #d3d3d3")
							},
							"disabled" :
							{
								"border" : nexacro.BorderObject("1px solid #d3d3d3")
							}
						}
					},
					"sta_WF_BoxGrayNB" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("0px none")
							},
							"mouseover" :
							{
								"border" : nexacro.BorderObject("0px none")
							},
							"disabled" :
							{
								"border" : nexacro.BorderObject("0px none")
							}
						}
					},
					"sta_WF_Location" :
					{
						"self" :
						{
							"enabled" :
							{
								"color" : nexacro.ColorObject("#d1d0d0"),
								"font" : nexacro.FontObject("normal 12px \"Verdana\"")
							},
							"mouseover" :
							{
								"color" : nexacro.ColorObject("#d1d0d0"),
								"font" : nexacro.FontObject("normal 12px \"Verdana\"")
							},
							"disabled" :
							{
								"color" : nexacro.ColorObject("#d1d0d0"),
								"font" : nexacro.FontObject("normal 12px \"Verdana\"")
							}
						}
					},
					"sta_WF_InputLabel" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("0px none, 1px solid #e5e5e5, 0px none, 1px solid #e5e5e5"),
								"padding" : nexacro.PaddingObject("0px 6px"),
								"color" : nexacro.ColorObject("#666666")
							}
						}
					},
					"sta_WF_InputLabelL" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("0px none, 1px solid #e5e5e5, 0px none, 1px solid #f3f7f7"),
								"padding" : nexacro.PaddingObject("0px 6px"),
								"color" : nexacro.ColorObject("#666666")
							}
						}
					},
					"sta_WF_InputBgT" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("1px solid #b9bec0, 0px none, 1px solid #e5e5e5, 0px none")
							}
						}
					},
					"sta_WF_InputBgM" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("1px solid #e5e5e5, 0px none, 1px solid #e5e5e5, 0px none")
							}
						}
					},
					"sta_WF_InputBgB" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("1px solid #e5e5e5, 0px none, 1px solid #b9bec0, 0px none")
							}
						}
					},
					"sta_WF_InputBgTB" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("1px solid #b9bec0, 0px none, 1px solid #b9bec0, 0px none")
							}
						}
					},
					"sta_WF_SubTitle" :
					{
						"self" :
						{
							"enabled" :
							{
								"padding" : nexacro.PaddingObject("0px 0px 9px 10px")
							}
						}
					},
					"sta_WF_InputBtitle" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("1px solid #b9bec0, 1px solid #d3d3d3, 1px solid #b9bec0, 0px none"),
								"padding" : nexacro.PaddingObject("0px 6px"),
								"font" : nexacro.FontObject("bold 12px \"Verdana\""),
								"color" : nexacro.ColorObject("#113367")
							},
							"mouseover" :
							{
								"border" : nexacro.BorderObject("1px solid #b9bec0, 1px solid #d3d3d3, 1px solid #b9bec0, 0px none"),
								"padding" : nexacro.PaddingObject("0px 6px"),
								"font" : nexacro.FontObject("bold 12px \"Verdana\""),
								"color" : nexacro.ColorObject("#113367")
							}
						}
					},
					"sta_WF_Red" :
					{
						"self" :
						{
							"enabled" :
							{
								"color" : nexacro.ColorObject("red"),
								"font" : nexacro.FontObject("bold 12px \"Verdana\"")
							},
							"mouseover" :
							{
								"color" : nexacro.ColorObject("red"),
								"font" : nexacro.FontObject("bold 12px \"Verdana\"")
							},
							"disabled" :
							{
								"color" : nexacro.ColorObject("red"),
								"font" : nexacro.FontObject("bold 12px \"Verdana\"")
							}
						}
					},
					"sta_WF_Blue" :
					{
						"self" :
						{
							"enabled" :
							{
								"color" : nexacro.ColorObject("blue"),
								"font" : nexacro.FontObject("bold 12px \"Verdana\"")
							},
							"mouseover" :
							{
								"color" : nexacro.ColorObject("blue"),
								"font" : nexacro.FontObject("bold 12px \"Verdana\"")
							},
							"disabled" :
							{
								"color" : nexacro.ColorObject("blue"),
								"font" : nexacro.FontObject("bold 12px \"Verdana\"")
							}
						}
					},
					"sta_WF_Green" :
					{
						"self" :
						{
							"enabled" :
							{
								"color" : nexacro.ColorObject("green"),
								"font" : nexacro.FontObject("bold 12px \"Verdana\"")
							},
							"mouseover" :
							{
								"color" : nexacro.ColorObject("green"),
								"font" : nexacro.FontObject("bold 12px \"Verdana\"")
							},
							"disabled" :
							{
								"color" : nexacro.ColorObject("green"),
								"font" : nexacro.FontObject("bold 12px \"Verdana\"")
							}
						}
					},
					"sta_LOGIN_FieldBg" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("0px none, 0px none, 2px solid #ffffff, 0px none")
							},
							"mouseover" :
							{
								"border" : nexacro.BorderObject("0px none, 0px none, 2px solid #ffffff, 0px none")
							},
							"disabled" :
							{
								"border" : nexacro.BorderObject("0px none, 0px none, 2px solid #ffffff, 0px none")
							}
						}
					},
					"sta_LOGIN_Help" :
					{
						"self" :
						{
							"enabled" :
							{
								"color" : nexacro.ColorObject("#ffffff")
							},
							"mouseover" :
							{
								"color" : nexacro.ColorObject("#ffffff")
							},
							"disabled" :
							{
								"color" : nexacro.ColorObject("#ffffff")
							}
						}
					},
					"sta_MAIN_FieldBg" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("1px solid #dadfe1")
							},
							"mouseover" :
							{
								"border" : nexacro.BorderObject("1px solid #dadfe1")
							},
							"disabled" :
							{
								"border" : nexacro.BorderObject("1px solid #dadfe1")
							}
						}
					},
					"sta_MAIN_PointBg" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("1px solid #dadfe1")
							},
							"mouseover" :
							{
								"border" : nexacro.BorderObject("1px solid #dadfe1")
							},
							"disabled" :
							{
								"border" : nexacro.BorderObject("1px solid #dadfe1")
							}
						}
					},
					"sta_MAIN_Title" :
					{
						"self" :
						{
							"enabled" :
							{
								"font" : nexacro.FontObject("bold 14px \"Verdana\""),
								"color" : nexacro.ColorObject("#d52800")
							},
							"mouseover" :
							{
								"font" : nexacro.FontObject("bold 14px \"Verdana\""),
								"color" : nexacro.ColorObject("#d52800")
							},
							"disabled" :
							{
								"font" : nexacro.FontObject("bold 14px \"Verdana\""),
								"color" : nexacro.ColorObject("#d52800")
							}
						}
					},
					"sta_MAIN_SubTitle" :
					{
						"self" :
						{
							"enabled" :
							{
								"font" : nexacro.FontObject("bold 13px \"Verdana\""),
								"color" : nexacro.ColorObject("#555555")
							},
							"mouseover" :
							{
								"font" : nexacro.FontObject("bold 13px \"Verdana\""),
								"color" : nexacro.ColorObject("#555555")
							},
							"disabled" :
							{
								"font" : nexacro.FontObject("bold 13px \"Verdana\""),
								"color" : nexacro.ColorObject("#555555")
							}
						}
					},
					"sta_MAIN_Text" :
					{
						"self" :
						{
							"enabled" :
							{
								"font" : nexacro.FontObject("bold 12px \"Verdana\""),
								"color" : nexacro.ColorObject("#c8cdd6")
							},
							"mouseover" :
							{
								"font" : nexacro.FontObject("bold 12px \"Verdana\""),
								"color" : nexacro.ColorObject("#c8cdd6")
							},
							"disabled" :
							{
								"font" : nexacro.FontObject("bold 12px \"Verdana\""),
								"color" : nexacro.ColorObject("#c8cdd6")
							}
						}
					},
					"sta_MAIN_IncText" :
					{
						"self" :
						{
							"enabled" :
							{
								"font" : nexacro.FontObject("bold 12px \"Verdana\""),
								"color" : nexacro.ColorObject("#ff0000")
							},
							"mouseover" :
							{
								"font" : nexacro.FontObject("bold 12px \"Verdana\""),
								"color" : nexacro.ColorObject("#ff0000")
							},
							"disabled" :
							{
								"font" : nexacro.FontObject("bold 12px \"Verdana\""),
								"color" : nexacro.ColorObject("#ff0000")
							}
						}
					},
					"sta_MAIN_DecText" :
					{
						"self" :
						{
							"enabled" :
							{
								"font" : nexacro.FontObject("bold 12px \"Verdana\""),
								"color" : nexacro.ColorObject("#017fd6")
							},
							"mouseover" :
							{
								"font" : nexacro.FontObject("bold 12px \"Verdana\""),
								"color" : nexacro.ColorObject("#017fd6")
							},
							"disabled" :
							{
								"font" : nexacro.FontObject("bold 12px \"Verdana\""),
								"color" : nexacro.ColorObject("#017fd6")
							}
						}
					},
					"sta_MAIN_Goal" :
					{
						"self" :
						{
							"enabled" :
							{
								"font" : nexacro.FontObject("bold 56px \"Verdana\""),
								"color" : nexacro.ColorObject("#8ea1bd")
							},
							"mouseover" :
							{
								"font" : nexacro.FontObject("bold 56px \"Verdana\""),
								"color" : nexacro.ColorObject("#8ea1bd")
							},
							"disabled" :
							{
								"font" : nexacro.FontObject("bold 56px \"Verdana\""),
								"color" : nexacro.ColorObject("#8ea1bd")
							}
						}
					},
					"sta_MAIN_Accu" :
					{
						"self" :
						{
							"enabled" :
							{
								"font" : nexacro.FontObject("bold 56px \"Verdana\""),
								"color" : nexacro.ColorObject("#c4bba5")
							},
							"mouseover" :
							{
								"font" : nexacro.FontObject("bold 56px \"Verdana\""),
								"color" : nexacro.ColorObject("#c4bba5")
							},
							"disabled" :
							{
								"font" : nexacro.FontObject("bold 56px \"Verdana\""),
								"color" : nexacro.ColorObject("#c4bba5")
							}
						}
					},
					"sta_MAIN_MPlan" :
					{
						"self" :
						{
							"enabled" :
							{
								"font" : nexacro.FontObject("bold 13px \"Verdana\""),
								"color" : nexacro.ColorObject("#ffffff")
							},
							"mouseover" :
							{
								"font" : nexacro.FontObject("bold 13px \"Verdana\""),
								"color" : nexacro.ColorObject("#ffffff")
							},
							"disabled" :
							{
								"font" : nexacro.FontObject("bold 13px \"Verdana\""),
								"color" : nexacro.ColorObject("#ffffff")
							}
						}
					},
					"sta_MAIN_Board" :
					{
						"self" :
						{
							"enabled" :
							{
								"font" : nexacro.FontObject("bold 13px \"Verdana\""),
								"color" : nexacro.ColorObject("#a7a7a7")
							},
							"mouseover" :
							{
								"font" : nexacro.FontObject("bold 13px \"Verdana\""),
								"color" : nexacro.ColorObject("#a7a7a7")
							},
							"disabled" :
							{
								"font" : nexacro.FontObject("bold 13px \"Verdana\""),
								"color" : nexacro.ColorObject("#a7a7a7")
							}
						}
					},
					"sta_MAIN_Rdisplay" :
					{
						"self" :
						{
							"enabled" :
							{
								"padding" : nexacro.PaddingObject("0px 0px 1px 0px"),
								"color" : nexacro.ColorObject("#ffffff"),
								"font" : nexacro.FontObject("bold 13px \"Verdana\"")
							},
							"mouseover" :
							{
								"padding" : nexacro.PaddingObject("0px 0px 1px 0px"),
								"color" : nexacro.ColorObject("#ffffff"),
								"font" : nexacro.FontObject("bold 13px \"Verdana\"")
							},
							"disabled" :
							{
								"padding" : nexacro.PaddingObject("0px 0px 1px 0px"),
								"color" : nexacro.ColorObject("#ffffff"),
								"font" : nexacro.FontObject("bold 13px \"Verdana\"")
							}
						}
					},
					"sta_MAIN_ImgText" :
					{
						"self" :
						{
							"enabled" :
							{
								"padding" : nexacro.PaddingObject("37px 0px 0px 37px"),
								"color" : nexacro.ColorObject("#ffffff"),
								"font" : nexacro.FontObject("bold 18px/23px \"Verdana\"")
							},
							"mouseover" :
							{
								"padding" : nexacro.PaddingObject("37px 0px 0px 37px"),
								"color" : nexacro.ColorObject("#ffffff"),
								"font" : nexacro.FontObject("bold 18px/23px \"Verdana\"")
							},
							"disabled" :
							{
								"padding" : nexacro.PaddingObject("37px 0px 0px 37px"),
								"color" : nexacro.ColorObject("#ffffff"),
								"font" : nexacro.FontObject("bold 18px/23px \"Verdana\"")
							}
						}
					},
					"btn_POP_BlueText" :
					{
						"self" :
						{
							"enabled" :
							{
								"font" : nexacro.FontObject("normal 12px/18px \"Verdana\""),
								"color" : nexacro.ColorObject("#006cb7")
							},
							"mouseover" :
							{
								"font" : nexacro.FontObject("normal 12px/18px \"Verdana\""),
								"color" : nexacro.ColorObject("#006cb7")
							},
							"disabled" :
							{
								"font" : nexacro.FontObject("normal 12px/18px \"Verdana\""),
								"color" : nexacro.ColorObject("#006cb7")
							}
						}
					},
					"sta_WF_GuideTitle" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("1px solid #c1c1c1"),
								"padding" : nexacro.PaddingObject("0px 0px 0px 30pxx")
							}
						}
					},
					"sta_WF_GuideBg" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("1px solid #c1c1c1")
							}
						}
					},
					"sta_WF_GuideText" :
					{
						"self" :
						{
							"enabled" :
							{
								"color" : nexacro.ColorObject("#aaaaaa"),
								"font" : nexacro.FontObject("12px \"Verdana\"")
							}
						}
					}
				}
			},
			"VScrollBarControl" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("0px none"),
						"padding" : nexacro.PaddingObject("1px 3px 1px 3px")
					},
					"mouseover" :
					{
						"border" : nexacro.BorderObject("0px none"),
						"padding" : nexacro.PaddingObject("1px 3px 1px 3px")
					},
					"disabled" :
					{
						"border" : nexacro.BorderObject("0px none")
					}
				}
			},
			"decbutton" :
			{
				"parent" :
				{
					"VScrollBarControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/spin_WF_spinUpN.png\")")
							},
							"focused" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/spin_WF_spinUpN.png\")")
							},
							"selected" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/spin_WF_spinUpN.png\")")
							},
							"mouseover" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/spin_WF_spinUpM.png\")")
							},
							"pushed" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/spin_WF_spinUpM.png\")")
							},
							"disabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/spin_WF_spinUpD.png\")")
							}
						}
					},
					"HScrollBarControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/spin_WF_spinLeftN.png\")")
							},
							"focused" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/spin_WF_spinLeftN.png\")")
							},
							"selected" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/spin_WF_spinLeftN.png\")")
							},
							"mouseover" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/spin_WF_spinLeftM.png\")")
							},
							"pushed" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/spin_WF_spinLeftM.png\")")
							},
							"disabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/spin_WF_spinLeftD.png\")")
							}
						}
					}
				}
			},
			"incbutton" :
			{
				"parent" :
				{
					"VScrollBarControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/spin_WF_spinDownN.png\")")
							},
							"focused" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/spin_WF_spinDownN.png\")")
							},
							"selected" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/spin_WF_spinDownN.png\")")
							},
							"mouseover" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/spin_WF_spinDownM.png\")")
							},
							"pushed" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/spin_WF_spinDownM.png\")")
							},
							"disabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/spin_WF_spinDownD.png\")")
							}
						}
					},
					"HScrollBarControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/spin_WF_spinRightN.png\")")
							},
							"focused" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/spin_WF_spinRightN.png\")")
							},
							"selected" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/spin_WF_spinRightN.png\")")
							},
							"mouseover" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/spin_WF_spinRightM.png\")")
							},
							"pushed" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/spin_WF_spinRightM.png\")")
							},
							"disabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/spin_WF_spinRightD.png\")")
							}
						}
					}
				}
			},
			"trackbar" :
			{
				"parent" :
				{
					"VScrollBarControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("0px none")
							},
							"focused" :
							{
								"border" : nexacro.BorderObject("0px none")
							},
							"selected" :
							{
								"border" : nexacro.BorderObject("0px none")
							},
							"mouseover" :
							{
								"border" : nexacro.BorderObject("0px none")
							},
							"pushed" :
							{
								"border" : nexacro.BorderObject("0px none")
							},
							"disabled" :
							{
								"border" : nexacro.BorderObject("0px none")
							}
						}
					},
					"HScrollBarControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("0px none")
							},
							"focused" :
							{
								"border" : nexacro.BorderObject("0px none")
							},
							"selected" :
							{
								"border" : nexacro.BorderObject("0px none")
							},
							"mouseover" :
							{
								"border" : nexacro.BorderObject("0px none")
							},
							"pushed" :
							{
								"border" : nexacro.BorderObject("0px none")
							},
							"disabled" :
							{
								"border" : nexacro.BorderObject("0px none")
							}
						}
					}
				}
			},
			"HScrollBarControl" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("0px none"),
						"padding" : nexacro.PaddingObject("3px 0px 3px 0px")
					},
					"mouseover" :
					{
						"border" : nexacro.BorderObject("0px none"),
						"padding" : nexacro.PaddingObject("3px 0px 3px 0px")
					},
					"disabled" :
					{
						"border" : nexacro.BorderObject("0px none"),
						"padding" : nexacro.PaddingObject("3px 0px 3px 0px")
					}
				}
			},
			"tabbuttonitem" :
			{
				"parent" :
				{
					"Tab" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("1px solid #eaeaea,1px solid #eaeaea,1px solid #d8d8d8,1px solid #eaeaea"),
								"padding" : nexacro.PaddingObject("7px 12px"),
								"color" : nexacro.ColorObject("#777777"),
								"font" : nexacro.FontObject("bold 11px/12px \"Verdana\"")
							},
							"mouseover" :
							{
								"border" : nexacro.BorderObject("1px solid #d8d8d8"),
								"color" : nexacro.ColorObject("#666666")
							},
							"focused" :
							{
								"border" : nexacro.BorderObject("1px solid #d8d8d8"),
								"color" : nexacro.ColorObject("#666666")
							},
							"selected" :
							{
								"border" : nexacro.BorderObject("2px solid #113367,1px solid #d8d8d8,1px solid #ffffff,1px solid #d8d8d8"),
								"padding" : nexacro.PaddingObject("6px 12px 7px 12px"),
								"color" : nexacro.ColorObject("#006cb7")
							},
							"disabled" :
							{
							}
						},
						"class" :
						{
							"tab_MDI_MainTabMenu" :
							{
								"self" :
								{
									"enabled" :
									{
										"border" : nexacro.BorderObject("0px none, 1px solid #e4e7ea, 0px none, 0px none"),
										"padding" : nexacro.PaddingObject("0px 9px 0px 12px"),
										"color" : nexacro.ColorObject("#949799")
									},
									"focused" :
									{
										"border" : nexacro.BorderObject("0px none, 1px solid #e4e7ea, 0px none, 0px none"),
										"padding" : nexacro.PaddingObject("0px 9px 0px 12px"),
										"color" : nexacro.ColorObject("#949799")
									},
									"disabled" :
									{
										"border" : nexacro.BorderObject("0px none, 1px solid #e4e7ea, 0px none, 0px none"),
										"padding" : nexacro.PaddingObject("0px 9px 0px 12px"),
										"color" : nexacro.ColorObject("#949799")
									},
									"mouseover" :
									{
										"border" : nexacro.BorderObject("0px none"),
										"padding" : nexacro.PaddingObject("0px 9px 0px 12px"),
										"color" : nexacro.ColorObject("#004473")
									},
									"selected" :
									{
										"border" : nexacro.BorderObject("0px none"),
										"padding" : nexacro.PaddingObject("0px 10px 0px 12px"),
										"color" : nexacro.ColorObject("#004473")
									}
								}
							}
						}
					}
				}
			},
			"tabbuttonitemtext" :
			{
				"parent" :
				{
					"tabbuttonitem" :
					{
						"parent" :
						{
							"Tab" :
							{
								"self" :
								{
									"mouseover" :
									{
									},
									"disabled" :
									{
									}
								}
							}
						}
					}
				}
			},
			"extrabutton" :
			{
				"parent" :
				{
					"tabbuttonitem" :
					{
						"parent" :
						{
							"Tab" :
							{
								"self" :
								{
									"enabled" :
									{
										"icon" : nexacro.UrlObject("URL(\"theme://images/tab_AF_tabExtraBtn.png\")"),
										"padding" : nexacro.PaddingObject("0px 0px 0px 12px")
									},
									"disabled" :
									{
									}
								}
							}
						}
					}
				}
			},
			"tabpage" :
			{
				"parent" :
				{
					"Tab" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("1px solid #d3d3d3")
							},
							"mouseover" :
							{
								"border" : nexacro.BorderObject("1px solid #d3d3d3")
							},
							"focused" :
							{
								"border" : nexacro.BorderObject("1px solid #d3d3d3")
							},
							"disabled" :
							{
							}
						},
						"class" :
						{
							"tab_MDI_MainTabMenu" :
							{
								"self" :
								{
									"enabled" :
									{
										"border" : nexacro.BorderObject("0px none")
									},
									"focused" :
									{
										"border" : nexacro.BorderObject("0px none")
									},
									"mouseover" :
									{
										"border" : nexacro.BorderObject("0px none")
									},
									"disabled" :
									{
										"border" : nexacro.BorderObject("0px none")
									}
								}
							}
						}
					}
				}
			},
			"TextArea" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("1px solid #c8c8c8"),
						"padding" : nexacro.PaddingObject("4px 5px")
					},
					"mouseover" :
					{
						"border" : nexacro.BorderObject("1px solid #006cb7")
					},
					"focused" :
					{
						"border" : nexacro.BorderObject("1px solid #006cb7")
					},
					"disabled" :
					{
						"border" : nexacro.BorderObject("0px none"),
						"color" : nexacro.ColorObject("#afafaf")
					},
					"readonly" :
					{
					},
					"nulltext" :
					{
						"color" : nexacro.ColorObject("#d0d0d0")
					}
				},
				"class" :
				{
					"com_WF_Essential" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("1px solid #39b54a")
							}
						}
					}
				}
			},
			"treeitemtext" :
			{
				"parent" :
				{
					"celltreeitem" :
					{
						"parent" :
						{
							"cell" :
							{
								"parent" :
								{
									"row" :
									{
										"parent" :
										{
											"body" :
											{
												"parent" :
												{
													"Grid" :
													{
														"class" :
														{
															"grd_LF_TreeGrd" :
															{
																"self" :
																{
																	"enabled" :
																	{
																		"border" : nexacro.BorderObject("0px none, 0px none, 0px none, 3px solid transparent")
																	}
																}
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			},
			"Tab" :
			{
				"class" :
				{
					"tab_MDI_MainTabMenu" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"font" : nexacro.FontObject("bold 12px \"Verdana\"")
							},
							"focused" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"font" : nexacro.FontObject("bold 12px \"Verdana\"")
							},
							"mouseover" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"font" : nexacro.FontObject("bold 12px \"Verdana\"")
							}
						}
					}
				}
			},
			"Div" :
			{
				"class" :
				{
					"div_WF_Search" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("1px solid #d3d3d3")
							}
						}
					},
					"div_WF_DefaultBox" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("1px solid #d3d3d3")
							}
						}
					},
					"div_WF_BlueBox" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("0px none")
							}
						}
					}
				}
			}
		},
		{
			"includeStatusMap" : true
		}
		);

		var imgcache = nexacro._getImageCacheMaps();
		imgcache[nexacro._getImageLocation("theme://images/img_TB_Min.png")] = { width:10, height:10 };
		imgcache[nexacro._getImageLocation("theme://images/img_TB_Max.png")] = { width:10, height:10 };
		imgcache[nexacro._getImageLocation("theme://images/img_TB_Normal.png")] = { width:10, height:10 };
		imgcache[nexacro._getImageLocation("theme://images/img_TB_Close.png")] = { width:10, height:10 };
		imgcache[nexacro._getImageLocation("theme://images/cal_WF_dropBtnN.png")] = { width:12, height:13 };
		imgcache[nexacro._getImageLocation("theme://images/cal_WF_dropBtnM.png")] = { width:12, height:13 };
		imgcache[nexacro._getImageLocation("theme://images/cal_WF_dropBtnD.png")] = { width:12, height:13 };
		imgcache[nexacro._getImageLocation("theme://images/spin_WF_spinDownN.png")] = { width:5, height:3 };
		imgcache[nexacro._getImageLocation("theme://images/spin_WF_spinDownM.png")] = { width:5, height:3 };
		imgcache[nexacro._getImageLocation("theme://images/spin_WF_spinDownD.png")] = { width:5, height:3 };
		imgcache[nexacro._getImageLocation("theme://images/spin_WF_spinUpN.png")] = { width:5, height:3 };
		imgcache[nexacro._getImageLocation("theme://images/spin_WF_spinUpM.png")] = { width:5, height:3 };
		imgcache[nexacro._getImageLocation("theme://images/spin_WF_spinUpD.png")] = { width:5, height:3 };
		imgcache[nexacro._getImageLocation("theme://images/chk_WF_chkBoxN.png")] = { width:13, height:13 };
		imgcache[nexacro._getImageLocation("theme://images/chk_WF_chkBoxM.png")] = { width:13, height:13 };
		imgcache[nexacro._getImageLocation("theme://images/chk_WF_chkBoxS.png")] = { width:13, height:13 };
		imgcache[nexacro._getImageLocation("theme://images/chk_WF_chkBoxMS.png")] = { width:13, height:13 };
		imgcache[nexacro._getImageLocation("theme://images/chk_WF_chkBoxD.png")] = { width:13, height:13 };
		imgcache[nexacro._getImageLocation("theme://images/chk_WF_chkBoxDS.png")] = { width:13, height:13 };
		imgcache[nexacro._getImageLocation("theme://images/com_WF_dropBtnN.png")] = { width:7, height:4 };
		imgcache[nexacro._getImageLocation("theme://images/com_WF_dropBtnM.png")] = { width:7, height:4 };
		imgcache[nexacro._getImageLocation("theme://images/com_WF_dropBtnD.png")] = { width:7, height:4 };
		imgcache[nexacro._getImageLocation("theme://images/cal_WF_dpkHeadNextN.png")] = { width:5, height:9 };
		imgcache[nexacro._getImageLocation("theme://images/cal_WF_dpkHeadNextM.png")] = { width:5, height:9 };
		imgcache[nexacro._getImageLocation("theme://images/cal_WF_dpkHeadNextD.png")] = { width:5, height:9 };
		imgcache[nexacro._getImageLocation("theme://images/cal_WF_dpkHeadPrevN.png")] = { width:5, height:9 };
		imgcache[nexacro._getImageLocation("theme://images/cal_WF_dpkHeadPrevM.png")] = { width:5, height:9 };
		imgcache[nexacro._getImageLocation("theme://images/cal_WF_dpkHeadPrevD.png")] = { width:5, height:9 };
		imgcache[nexacro._getImageLocation("theme://images/cal_WF_dpkHeadSpinUpBtnN.png")] = { width:5, height:3 };
		imgcache[nexacro._getImageLocation("theme://images/cal_WF_dpkHeadSpinUpBtnM.png")] = { width:5, height:3 };
		imgcache[nexacro._getImageLocation("theme://images/cal_WF_dpkHeadSpinUpBtnD.png")] = { width:5, height:3 };
		imgcache[nexacro._getImageLocation("theme://images/cal_WF_dpkHeadSpinDownBtnN.png")] = { width:5, height:3 };
		imgcache[nexacro._getImageLocation("theme://images/cal_WF_dpkHeadSpinDownBtnM.png")] = { width:5, height:3 };
		imgcache[nexacro._getImageLocation("theme://images/cal_WF_dpkHeadSpinDownBtnD.png")] = { width:5, height:3 };
		imgcache[nexacro._getImageLocation("theme://images/grd_WF_TreeBtnCollapse.png")] = { width:9, height:9 };
		imgcache[nexacro._getImageLocation("theme://images/grd_WF_TreeBtnExpand.png")] = { width:9, height:9 };
		imgcache[nexacro._getImageLocation("theme://images/grd_WF_TreeImgItem.png")] = { width:8, height:11 };
		imgcache[nexacro._getImageLocation("theme://images/grd_WF_TreeImgCollapse.png")] = { width:10, height:12 };
		imgcache[nexacro._getImageLocation("theme://images/grd_WF_TreeImgExpand.png")] = { width:10, height:12 };
		imgcache[nexacro._getImageLocation("theme://images/mnu_TF_menuBgS.png")] = { width:1, height:64 };
		imgcache[nexacro._getImageLocation("theme://images/btn_AF_midRightN.png")] = { width:4, height:7 };
		imgcache[nexacro._getImageLocation("theme://images/btn_AF_midRightM.png")] = { width:4, height:7 };
		imgcache[nexacro._getImageLocation("theme://images/btn_AF_midRightP.png")] = { width:4, height:7 };
		imgcache[nexacro._getImageLocation("theme://images/btn_AF_midLeftN.png")] = { width:4, height:7 };
		imgcache[nexacro._getImageLocation("theme://images/btn_AF_midLeftM.png")] = { width:4, height:7 };
		imgcache[nexacro._getImageLocation("theme://images/btn_AF_midLeftP.png")] = { width:4, height:7 };
		imgcache[nexacro._getImageLocation("theme://images/btn_AF_midRightD.png")] = { width:4, height:7 };
		imgcache[nexacro._getImageLocation("theme://images/rdo_WF_radioBtnN.png")] = { width:13, height:13 };
		imgcache[nexacro._getImageLocation("theme://images/rdo_WF_radioBtnM.png")] = { width:13, height:13 };
		imgcache[nexacro._getImageLocation("theme://images/rdo_WF_radioBtnS.png")] = { width:13, height:13 };
		imgcache[nexacro._getImageLocation("theme://images/rdo_WF_radioBtnD.png")] = { width:13, height:13 };
		imgcache[nexacro._getImageLocation("theme://images/rdo_WF_radioBtnMS.png")] = { width:13, height:13 };
		imgcache[nexacro._getImageLocation("theme://images/rdo_WF_radioBtnDS.png")] = { width:13, height:13 };
		imgcache[nexacro._getImageLocation("theme://images/spin_WF_spinLeftN.png")] = { width:3, height:5 };
		imgcache[nexacro._getImageLocation("theme://images/spin_WF_spinLeftM.png")] = { width:3, height:5 };
		imgcache[nexacro._getImageLocation("theme://images/spin_WF_spinLeftD.png")] = { width:3, height:5 };
		imgcache[nexacro._getImageLocation("theme://images/spin_WF_spinRightN.png")] = { width:3, height:5 };
		imgcache[nexacro._getImageLocation("theme://images/spin_WF_spinRightM.png")] = { width:3, height:5 };
		imgcache[nexacro._getImageLocation("theme://images/spin_WF_spinRightD.png")] = { width:3, height:5 };
		imgcache[nexacro._getImageLocation("theme://images/btn_AF_midLeftD.png")] = { width:4, height:7 };
		imgcache[nexacro._getImageLocation("theme://images/tab_AF_tabExtraBtn.png")] = { width:12, height:12 };
		imgcache[nexacro._getImageLocation("theme://images/img_TF_Logo_hanwha_w.png")] = { width:224, height:75 };
		imgcache[nexacro._getImageLocation("theme://images/img_LOGIN_logId.png")] = { width:14, height:14 };
		imgcache[nexacro._getImageLocation("theme://images/img_LOGIN_logPwd.png")] = { width:16, height:8 };
		imgcache[nexacro._getImageLocation("theme://images/btn_TF_leftSpinIcon.png")] = { width:5, height:7 };
		imgcache[nexacro._getImageLocation("theme://images/btn_TF_leftSpinIconD.png")] = { width:5, height:7 };
		imgcache[nexacro._getImageLocation("theme://images/btn_TF_rightSpinIcon.png")] = { width:5, height:7 };
		imgcache[nexacro._getImageLocation("theme://images/btn_TF_rightSpinIconD.png")] = { width:5, height:7 };
		imgcache[nexacro._getImageLocation("theme://images/btn_TF_logoutN.png")] = { width:17, height:19 };
		imgcache[nexacro._getImageLocation("theme://images/btn_TF_logoutMP.png")] = { width:17, height:19 };
		imgcache[nexacro._getImageLocation("theme://images/btn_TF_settingN.png")] = { width:21, height:21 };
		imgcache[nexacro._getImageLocation("theme://images/btn_TF_settingMP.png")] = { width:21, height:21 };
		imgcache[nexacro._getImageLocation("theme://images/btn_TF_leftOpenN.png")] = { width:14, height:12 };
		imgcache[nexacro._getImageLocation("theme://images/btn_TF_leftOpenM.png")] = { width:14, height:12 };
		imgcache[nexacro._getImageLocation("theme://images/tab_LF_menuBg.png")] = { width:1, height:33 };
		imgcache[nexacro._getImageLocation("theme://images/tab_LF_menuN.png")] = { width:13, height:12 };
		imgcache[nexacro._getImageLocation("theme://images/tab_LF_bookMarkN.png")] = { width:16, height:15 };
		imgcache[nexacro._getImageLocation("theme://images/tab_LF_searchN.png")] = { width:13, height:12 };
		imgcache[nexacro._getImageLocation("theme://images/tab_LF_historyN.png")] = { width:16, height:4 };
		imgcache[nexacro._getImageLocation("theme://images/tab_LF_menuS.png")] = { width:13, height:12 };
		imgcache[nexacro._getImageLocation("theme://images/tab_LF_bookMarkS.png")] = { width:16, height:15 };
		imgcache[nexacro._getImageLocation("theme://images/tab_LF_searchS.png")] = { width:13, height:12 };
		imgcache[nexacro._getImageLocation("theme://images/tab_LF_historyS.png")] = { width:16, height:4 };
		imgcache[nexacro._getImageLocation("theme://images/grd_LF_menuSubIconC.png")] = { width:9, height:9 };
		imgcache[nexacro._getImageLocation("theme://images/grd_LF_menuSubIconE.png")] = { width:9, height:9 };
		imgcache[nexacro._getImageLocation("theme://images/grd_LF_menu3depthC.png")] = { width:9, height:8 };
		imgcache[nexacro._getImageLocation("theme://images/grd_LF_menu3depthE.png")] = { width:9, height:7 };
		imgcache[nexacro._getImageLocation("theme://images/grd_LF_bookmarkMenuBgN.png")] = { width:31, height:10 };
		imgcache[nexacro._getImageLocation("theme://images/grd_LF_bookmarkMenuBgMS.png")] = { width:31, height:10 };
		imgcache[nexacro._getImageLocation("theme://images/grd_LF_searchBgN.png")] = { width:27, height:7 };
		imgcache[nexacro._getImageLocation("theme://images/grd_LF_searchBgMS.png")] = { width:27, height:7 };
		imgcache[nexacro._getImageLocation("theme://images/grd_LF_historyBgN.png")] = { width:32, height:11 };
		imgcache[nexacro._getImageLocation("theme://images/grd_LF_historyBgMS.png")] = { width:32, height:11 };
		imgcache[nexacro._getImageLocation("theme://images/sta_LF_menuTitle.png")] = { width:9, height:11 };
		imgcache[nexacro._getImageLocation("theme://images/btn_MDI_homeN.png")] = { width:14, height:13 };
		imgcache[nexacro._getImageLocation("theme://images/btn_MDI_homeM.png")] = { width:14, height:13 };
		imgcache[nexacro._getImageLocation("theme://images/btn_MDI_homeD.png")] = { width:14, height:13 };
		imgcache[nexacro._getImageLocation("theme://images/btn_MDI_leftTabChaN.png")] = { width:5, height:9 };
		imgcache[nexacro._getImageLocation("theme://images/btn_MDI_leftTabChaM.png")] = { width:5, height:9 };
		imgcache[nexacro._getImageLocation("theme://images/btn_MDI_rightTabChaN.png")] = { width:5, height:9 };
		imgcache[nexacro._getImageLocation("theme://images/btn_MDI_rightTabChaM.png")] = { width:5, height:9 };
		imgcache[nexacro._getImageLocation("theme://images/btn_MDI_scnFullN.png")] = { width:10, height:10 };
		imgcache[nexacro._getImageLocation("theme://images/btn_MDI_scnFullM.png")] = { width:10, height:10 };
		imgcache[nexacro._getImageLocation("theme://images/btn_MDI_scnWinN.png")] = { width:11, height:10 };
		imgcache[nexacro._getImageLocation("theme://images/btn_MDI_scnWinM.png")] = { width:11, height:10 };
		imgcache[nexacro._getImageLocation("theme://images/btn_MDI_scnVDivN.png")] = { width:10, height:10 };
		imgcache[nexacro._getImageLocation("theme://images/btn_MDI_scnVDivM.png")] = { width:10, height:10 };
		imgcache[nexacro._getImageLocation("theme://images/btn_MDI_scnHDivN.png")] = { width:10, height:10 };
		imgcache[nexacro._getImageLocation("theme://images/btn_MDI_scnHDivM.png")] = { width:10, height:10 };
		imgcache[nexacro._getImageLocation("theme://images/btn_MDI_scnCloseN.png")] = { width:11, height:11 };
		imgcache[nexacro._getImageLocation("theme://images/btn_MDI_scnCloseM.png")] = { width:11, height:11 };
		imgcache[nexacro._getImageLocation("theme://images/all_WF_iconEssential.png")] = { width:5, height:5 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_searchBtnN.png")] = { width:11, height:11 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_searchBtnM.png")] = { width:11, height:11 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_searchBtnP.png")] = { width:11, height:11 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_searchBtnD.png")] = { width:11, height:11 };
		imgcache[nexacro._getImageLocation("theme://images/btn_AF_midUpN.png")] = { width:7, height:4 };
		imgcache[nexacro._getImageLocation("theme://images/btn_AF_midUpM.png")] = { width:7, height:4 };
		imgcache[nexacro._getImageLocation("theme://images/btn_AF_midUpP.png")] = { width:7, height:4 };
		imgcache[nexacro._getImageLocation("theme://images/btn_AF_midUpD.png")] = { width:7, height:4 };
		imgcache[nexacro._getImageLocation("theme://images/btn_AF_midDownN.png")] = { width:7, height:4 };
		imgcache[nexacro._getImageLocation("theme://images/btn_AF_midDownM.png")] = { width:7, height:4 };
		imgcache[nexacro._getImageLocation("theme://images/btn_AF_midDownP.png")] = { width:7, height:4 };
		imgcache[nexacro._getImageLocation("theme://images/btn_AF_midDownD.png")] = { width:7, height:4 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_bookMarkN.png")] = { width:13, height:14 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_bookMarkS.png")] = { width:13, height:14 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_searchIcon.png")] = { width:11, height:12 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_searchIconBK.png")] = { width:11, height:12 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_incN.png")] = { width:13, height:13 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_incM.png")] = { width:13, height:13 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_incP.png")] = { width:13, height:13 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_incD.png")] = { width:13, height:13 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_decN.png")] = { width:13, height:13 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_decM.png")] = { width:13, height:13 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_decP.png")] = { width:13, height:13 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_decD.png")] = { width:13, height:13 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_helpN.png")] = { width:15, height:15 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_helpM.png")] = { width:15, height:15 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_helpP.png")] = { width:15, height:15 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_helpD.png")] = { width:15, height:15 };
		imgcache[nexacro._getImageLocation("theme://images/grd_WF_headEditCell.png")] = { width:7, height:7 };
		imgcache[nexacro._getImageLocation("theme://images/sta_WF_midTitle.png")] = { width:10, height:10 };
		imgcache[nexacro._getImageLocation("theme://images/sta_WF_smaTitle.png")] = { width:3, height:5 };
		imgcache[nexacro._getImageLocation("theme://images/sta_WF_seaFieldLabel.png")] = { width:4, height:4 };
		imgcache[nexacro._getImageLocation("theme://images/chk_LOGIN_chkBoxN.png")] = { width:12, height:12 };
		imgcache[nexacro._getImageLocation("theme://images/chk_LOGIN_chkBoxM.png")] = { width:12, height:12 };
		imgcache[nexacro._getImageLocation("theme://images/chk_LOGIN_chkBoxS.png")] = { width:12, height:12 };
		imgcache[nexacro._getImageLocation("theme://images/chk_LOGIN_chkBoxMS.png")] = { width:12, height:12 };
		imgcache[nexacro._getImageLocation("theme://images/btn_MAIN_moreN.png")] = { width:15, height:15 };
		imgcache[nexacro._getImageLocation("theme://images/btn_MAIN_moreP.png")] = { width:15, height:15 };
		imgcache[nexacro._getImageLocation("theme://images/grd_MAIN_newList.png")] = { width:12, height:11 };
		imgcache[nexacro._getImageLocation("theme://images/grd_MAIN_listBL.png")] = { width:3, height:3 };
		imgcache[nexacro._getImageLocation("theme://images/btn_MAIN_moreM.png")] = { width:15, height:15 };
		imgcache[nexacro._getImageLocation("theme://images/btn_TF_personDefault.png")] = { width:15, height:15 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_bookMarkM.png")] = { width:13, height:14 };
		imgcache[nexacro._getImageLocation("theme://images/grd_WF_expandBtn.png")] = { width:21, height:21 };
		imgcache[nexacro._getImageLocation("theme://images/img_LF_top5Icon.png")] = { width:46, height:20 };
		imgcache[nexacro._getImageLocation("theme://images/img_LOGIN_bg.jpg")] = { width:1920, height:1080 };
		imgcache[nexacro._getImageLocation("theme://images/img_LOGIN_logo.png")] = { width:174, height:38 };
		imgcache[nexacro._getImageLocation("theme://images/img_MAIN_accou.png")] = { width:28, height:30 };
		imgcache[nexacro._getImageLocation("theme://images/img_MAIN_const.png")] = { width:35, height:36 };
		imgcache[nexacro._getImageLocation("theme://images/img_MAIN_field.png")] = { width:34, height:26 };
		imgcache[nexacro._getImageLocation("theme://images/img_MAIN_insa.png")] = { width:41, height:26 };
		imgcache[nexacro._getImageLocation("theme://images/img_MAIN_performBG.png")] = { width:280, height:98 };
		imgcache[nexacro._getImageLocation("theme://images/img_MAIN_resou.png")] = { width:33, height:32 };
		imgcache[nexacro._getImageLocation("theme://images/img_MAIN_Safe.png")] = { width:30, height:34 };
		imgcache[nexacro._getImageLocation("theme://images/img_TF_line.png")] = { width:1, height:6 };
		imgcache[nexacro._getImageLocation("theme://images/img_TF_Logo.png")] = { width:123, height:26 };
		imgcache[nexacro._getImageLocation("theme://images/img_TF_Logo_hanwha.png")] = { width:224, height:75 };
		imgcache[nexacro._getImageLocation("theme://images/img_TF_Logo_TOBE.png")] = { width:224, height:75 };
		imgcache[nexacro._getImageLocation("theme://images/img_TF_personDef.png")] = { width:42, height:42 };
		imgcache[nexacro._getImageLocation("theme://images/img_TF_personIcon.png")] = { width:14, height:14 };
		imgcache[nexacro._getImageLocation("theme://images/img_TF_personMask.png")] = { width:55, height:64 };
		imgcache[nexacro._getImageLocation("theme://images/img_TF_popupIcon.png")] = { width:11, height:11 };
		imgcache[nexacro._getImageLocation("theme://images/img_top_logo01.png")] = { width:127, height:28 };
		imgcache[nexacro._getImageLocation("theme://images/img_top_logo02.png")] = { width:134, height:40 };
		imgcache[nexacro._getImageLocation("theme://images/img_WF_defaultImgN.png")] = { width:46, height:81 };
		imgcache[nexacro._getImageLocation("theme://images/testimg.jpg")] = { width:238, height:348 };
		imgcache[nexacro._getImageLocation("theme://images/testPersonPhoto.jpg")] = { width:128, height:128 };
		imgcache[nexacro._getImageLocation("theme://images/test_admin.jpg")] = { width:161, height:191 };
		imgcache[nexacro._getImageLocation("theme://images/test_person2.jpg")] = { width:191, height:262 };
	};
}
)();
